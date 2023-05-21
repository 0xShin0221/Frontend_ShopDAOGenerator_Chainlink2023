import Head from "next/head";

import {
  Container, Text, VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { DaoCreateStepper } from "./components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected, isDisconnected } = useAccount()

  return (
    <>
      <Head>
        <title>Generator</title>
        <meta name="description" content="gernerator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container paddingY="1rem">
          <VStack spacing="1rem">
            {isDisconnected && <Text>Firstly, please connect to your wallet.</Text>}
            <ConnectButton />
            {isConnected && <DaoCreateStepper />}
          </VStack>
        </Container>
      </main>
    </>
  );
}
