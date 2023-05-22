import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import { AccessTokenWalletAddress } from "@prisma/client";
import { useAccount } from "wagmi";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { Button, Input, Text, Link, VStack, Container, Heading, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  const [accessTokenWalletAddress, setAccessTokenWalletAddress] =
    useState<AccessTokenWalletAddress>();
  const [shopData, setShopData] = useState<any>();
  const { address } = useAccount();

  const fetchShop = useCallback(async (atwa: AccessTokenWalletAddress) => {
    try {
      const response = await fetch("/api/store/getByAccessToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken: atwa.accessToken, storeUrl: atwa.storeUrl }),
      });
      if (response.ok) {
        const shopData = await response.json();
        setShopData(shopData);
      } else {
        console.log(`Error fetching store data: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error fetching store data: ${error}`);
    }
  }, []);

  const createAccessTokenWalletAddress = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const accessToken = (event.target as HTMLFormElement).accessToken.value;
      const storeUrl = (event.target as HTMLFormElement).storeUrl.value;

      try {
        const response = await fetch("/api/accessTokenWalletAddress/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessToken,
            walletAddress: address,
            storeUrl,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Created new accessTokenWalletAddress");
          setAccessTokenWalletAddress(data);
        } else {
          console.log(
            `Error creatiing new accessTokenWalletAddress: ${response.status}`
          );
        }
      } catch (error) {
        console.error(`Error creating new accessTokenWalletAddress: ${error}`);
      }
    },
    [address]
  );

  const removeAccessTokenWalletAddress = useCallback(
    async (accessTokenWalletAddress: AccessTokenWalletAddress) => {
      try {
        const response = await fetch(`/api/accessTokenWalletAddress/${accessTokenWalletAddress.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          setAccessTokenWalletAddress(undefined);
        } else {
          console.log(
            `Error creatiing new accessTokenWalletAddress: ${response.status}`
          );
        }
      } catch (error) {
        console.error(`Error creating new accessTokenWalletAddress: ${error}`);
      }
    },
    []
  );

  const getByWalletAddress = useCallback(async () => {
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
  }, [address]);

  useEffect(() => {
    if (address === undefined) return;

    getByWalletAddress();
  }, [address, getByWalletAddress]);

  useEffect(() => {
    if (accessTokenWalletAddress === undefined) {
      setAccessTokenWalletAddress(undefined);
      return;
    }

    fetchShop(accessTokenWalletAddress);
  }, [accessTokenWalletAddress, fetchShop]);

  return (
    <>
      <Head>
        <title>Generator</title>
        <meta name="description" content="gernerator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VStack spacing="1rem" p="1rem">
          <Container>
            <ConnectButton />
          </Container>
          {address !== undefined && accessTokenWalletAddress !== undefined && (
            <Button
              type="button"
              onClick={() =>
                removeAccessTokenWalletAddress(accessTokenWalletAddress)
              }
            >
              Remove access token
            </Button>
          )}
          {address !== undefined && accessTokenWalletAddress === undefined && (
            <Container>
              <form onSubmit={createAccessTokenWalletAddress}>
                <VStack spacing="1rem">
                  <Text>
                    Please create a custom app from{" "}
                    <Link
                      as={NextLink}
                      color="teal.500"
                      href="https://help.shopify.com/en/manual/apps/app-types/custom-apps#get-the-api-credentials-for-a-custom-app"
                      isExternal
                    >
                      this link
                    </Link>{" "}
                    and obtain an access token.
                  </Text>
                  <Input
                    placeContent="Shopify Access token"
                    type="password"
                    name="accessToken"
                  />
                  <InputGroup>
                    <InputLeftAddon>https://</InputLeftAddon>
                    <Input name="storeUrl" placeholder='shopify-store-URL' />
                    <InputRightAddon>.myshopify.com</InputRightAddon>
                  </InputGroup>
                  <Button type="submit">Save access token</Button>
                </VStack>
              </form>
            </Container>
          )}
          {address !== undefined && accessTokenWalletAddress !== undefined && (
            <VStack spacing="0.5rem">
              <Heading as="h4" size="md">Shopify Store Info</Heading>
              <Text style={{ whiteSpace: "pre-wrap" }}>
                {JSON.stringify(shopData ?? {}, null, 2)}
              </Text>
            </VStack>
          )}
        </VStack>
      </main>
    </>
  );
}
