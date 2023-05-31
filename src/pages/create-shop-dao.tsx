import Head from "next/head";

import { Container, Text, VStack } from "@chakra-ui/react";
import { DaoCreateStepper } from "../components";
import { useAccount } from "wagmi";

export default function CreateShopDao() {
  const { isConnected, isDisconnected } = useAccount();

  return (
    <>
      <Head>
        <title>Create shop DAO | Shop DAO Generator</title>
        <meta name="description" content="gernerator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container paddingY="1rem">
          <VStack spacing="1rem">
            {isDisconnected && <Text>Please connect your wallet.</Text>}
            {isConnected && <DaoCreateStepper />}
          </VStack>
        </Container>
      </main>
    </>
  );
}
