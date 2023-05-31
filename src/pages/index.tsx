import Head from "next/head";
import openGraphScraper from "open-graph-scraper";
import { OgObject } from "open-graph-scraper/dist/lib/types";

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
import { DAODataList } from "@/mocks/DAOs";
import { DAODataType } from "@/types/DAOdata";
import { GetStaticProps } from "next";

type Props = {
  daoDataList: (DAODataType & { og: OgObject })[];
};

export default function Home({ daoDataList }: Props) {
  const router = useRouter();
  const bg = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <Head>
        <title>ShopDAO Generator</title>
        <meta name="description" content="gernerator" />
        <meta
          property="og:image"
          content="https://bb55-240d-1a-d28-f400-38-f690-f78c-534c.ngrok-free.app/api/vercel"
        />
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
              List of shopDAO generator governance DAOs
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
          {daoDataList.map((daoData) => (
            <DAOCard
              key={daoData.id}
              name={daoData.name}
              storeUrl={daoData.storeUrl}
              symbol={daoData.symbol}
              stats={daoData.stats}
              id={daoData.id}
              og={daoData.og}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // TODO: fetch data from API
  const daoDataList = await Promise.all(
    DAODataList.map(async (daoData) => {
      console.log("daoData.storeUrl", daoData.storeUrl);
      const res = await openGraphScraper({ url: daoData.storeUrl });
      if (res.error) console.log("openGraphScraper error", res.error);

      return {
        ...daoData,
        og: res.result,
      };
    })
  );

  return {
    props: {
      daoDataList,
    },
  };
};
