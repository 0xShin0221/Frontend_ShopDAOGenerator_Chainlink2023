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

import { DAOData, DAODataList } from "../../mocks/DAOs";

import type { ProposalType } from "../../types/Proposals";

import { ShopDetailCard } from "@/components/ShopCard";
import { DAODetailInfo } from "@/components/DAOCard/DAODetailInfo";

import { ProposalList } from "@/components/ProposalCard/ProposalList";

export default function Dao() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }

  const { name, storeUrl, symbol, stats, proposals, contractParameters } =
    DAODataList[Number(id)];

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

      <ShopDetailCard storeUrl={storeUrl} />

      <ProposalList proposals={proposals} />
    </Box>
  );
}
