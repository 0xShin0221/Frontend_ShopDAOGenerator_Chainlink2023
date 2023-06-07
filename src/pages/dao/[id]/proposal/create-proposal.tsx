import Head from "next/head";

import { Container, VStack } from "@chakra-ui/react";
import { ProposalCreateStepper } from "@/components/ProposalCreateStepper";

export default function CreateProposal() {
  return (
    <>
      <Head>
        <title>Create Proposal | Shop DAO Generator</title>
        <meta
          name="description"
          content="Create Proposal | Shop DAO Generator"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container paddingY="1rem">
          <VStack spacing="1rem">
            <ProposalCreateStepper />
          </VStack>
        </Container>
      </main>
    </>
  );
}
