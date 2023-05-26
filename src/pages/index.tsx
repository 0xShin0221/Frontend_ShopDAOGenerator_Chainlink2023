import Head from "next/head";

import {
  Button,
  VStack,
  Heading,
  Center,
  Text,
  Wrap,
  WrapItem,
  Card,
  CardBody,
  Box,
  useColorModeValue,
  Flex,
  Container,
  Stack,
  InputGroup,
  Icon,
  InputLeftElement,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { FirstView } from "@/components/Heros";
import { AppStats } from "@/components/Stats";
import { DAOCard } from "@/components/DAOCard";

export default function Home() {
  const router = useRouter();
  const bg = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <Head>
        <title>ShopDAO Generator</title>
        <meta name="description" content="gernerator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FirstView />
      <AppStats />

      <Box as="section" py={{ base: "16", md: "24" }}>
        <Container>
          <Stack
            spacing={{ base: "4", md: "6" }}
            align="center"
            textAlign="center"
          >
            <Stack spacing="3">
              <Heading size={{ base: "lg", md: "2xl" }} fontWeight="semibold">
                DAOs
              </Heading>
            </Stack>
            <Text color="muted" fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
              Get early access to 210+ components and free updates.
            </Text>
          </Stack>
        </Container>
      </Box>
      <Box width={{ base: "full", md: "auto" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          px={{ base: "4", md: "6" }}
          py={{ base: "4", md: "6" }}
        >
          {[...Array(10)].map((_, i) => (
            <DAOCard
              key={i}
              daoName="DAO"
              storeUrl="https://google.com"
              symbol="SAMPLE"
              stats={{ proposals: 3, holders: 3, voters: 3 }}
              id={String(i)}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
