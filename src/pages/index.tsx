import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import { AccessTokenWalletAddress } from "@prisma/client";
import { useAccount } from "wagmi";

import { useEffect, useState } from "react";

const fetchShop = async (accessToken: string) => {
  try {
    const response = await fetch("/api/store/getByAccessToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken }),
    });
    if (response.ok) {
      const shopData = await response.json();
      console.log(shopData);
    } else {
      console.log(`Error fetching store data: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error fetching store data: ${error}`);
  }
};

export default function Home() {
  const [accessTokenWalletAddress, setAccessTokenWalletAddress] =
    useState<AccessTokenWalletAddress>();
  const { address } = useAccount();

  useEffect(() => {
    if (address === undefined) return;

    (async () => {
      try {
        const response = await fetch(
          "/api/accessTokenWalletAddress/getByWalletAddress",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ walletAddress: address }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data === null) {
            console.log(
              "Not accessTokenWalletAddress found for the address: ",
              address
            );
            return;
          }

          setAccessTokenWalletAddress(data);
        } else {
          console.log(
            `Error fetching accessTokenWalletAddress: ${response.status}`
          );
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [address]);

  return (
    <>
      <Head>
        <title>Generator</title>
        <meta name="description" content="gernerator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ConnectButton />
        {address !== undefined && accessTokenWalletAddress === undefined && (
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              const accessToken = (event.target as HTMLFormElement).accessToken
                .value;

              try {
                const response = await fetch(
                  "/api/accessTokenWalletAddress/create",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      accessToken,
                      walletAddress: address,
                    }),
                  }
                );
                if (response.ok) {
                  const data = await response.json();
                  console.log('Created new accessTokenWalletAddress');
                  setAccessTokenWalletAddress(data);
                } else {
                  console.log(`Error creatiing new accessTokenWalletAddress: ${response.status}`)
                }
              } catch (error) {
                console.error(`Error creating new accessTokenWalletAddress: ${error}`);
              }
            }}
          >
            <label htmlFor="accessToken">Access token</label>
            <input type="password" id="accessToken" name="accessToken" />
            <button type="submit">Save access token</button>
          </form>
        )}
        {accessTokenWalletAddress !== undefined && (
          <button
            type="button"
            onClick={async () => {
              fetchShop(accessTokenWalletAddress.accessToken);
            }}
          >
            Fetch store info
          </button>
        )}
      </main>
    </>
  );
}
