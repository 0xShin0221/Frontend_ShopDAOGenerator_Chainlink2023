import {
  Avatar,
  Box,
  Button,
  VStack,
  HStack,
  Text,
  Link,
  Icon,
  Stack,
  Container,
  SimpleGrid,
  Heading,
  Badge,
  Stat,
  Alert,
  AlertIcon,
  CardHeader,
  CardBody,
  StackDivider,
  Card,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  Divider,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiExternalLink, FiFileText, FiSettings } from "react-icons/fi";
import router, { useRouter } from "next/router";
import openGraphScraper from "open-graph-scraper";
import { OgObject } from "open-graph-scraper/dist/lib/types";

import { DAOData, DAODataList } from "../../mocks/DAOs";

import type { ProposalType } from "../../types/Proposals";

import { ShopDetailCard } from "@/components/ShopCard";
import { DAODetailInfo } from "@/components/DAOCard/DAODetailInfo";

import { ProposalList } from "@/components/ProposalCard/ProposalList";
import { GetStaticPaths, GetStaticProps } from "next";
import { DAODataType } from "@/types/DAOdata";

export default function Dao(daoData: DAODataType & { og: OgObject }) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }

  const { name, storeUrl, symbol, stats, proposals, contractParameters, og } =
    daoData;

  return (
    <Box
      width={{ base: "full", md: "auto" }}
      px={{ base: "4", md: "6" }}
      borderRadius="lg"
      py="4"
      boxShadow="sm"
      borderColor="accent"
      backgroundColor={"gray.100"}
    >
      <DAODetailInfo daoData={DAOData} />

      <ShopDetailCard storeUrl={storeUrl} og={og} />

      <ProposalList proposals={proposals} />
    </Box>
  );
}

export const getStaticProps: GetStaticProps<DAODataType & { og: OgObject }> = async (context) => {
  console.log("context.params", context.params)
  const daoData = DAODataList[Number(context.params?.id)]
  const res = await openGraphScraper({ url: daoData.storeUrl });
  if (res.error) console.log("openGraphScraper error", res.error);
  return {
    props: {
      ...daoData,
      og: res.result,
    }
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = DAODataList.map((_, index) => `/dao/${index}`);
  return {
    paths,
    fallback: true,
  };
}
