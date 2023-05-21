import Head from "next/head";

import {
  Button,
  VStack,
  Heading,
  Center,
  Wrap,
  WrapItem,
  Card,
  CardBody,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Generator</title>
        <meta name="description" content="gernerator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box p="2rem" minHeight="100vh" backgroundColor="gray.50">
          <VStack spacing="1rem">
            <Center>
              <Button size="lg" colorScheme="teal" onClick={() => { router.push('/create-shop-dao'); }}>Create shop DAO</Button>
            </Center>
            <Heading alignSelf="self-start" size="lg">DAOs</Heading>
            <Wrap spacing="1rem">
              {[...Array(10)].map((_, i) => (
                <WrapItem key={i}>
                  <Card>
                    <CardBody>Sample DAO {i}</CardBody>
                  </Card>
                </WrapItem>
              ))}
            </Wrap>
          </VStack>
        </Box>
      </main>
    </>
  );
}
