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
  Divider,
  Flex,
} from "@chakra-ui/react";
import { FiExternalLink, FiFileText, FiSettings } from "react-icons/fi";
import router, { useRouter } from "next/router";

import { DAOData } from "../../mocks/DAOs";
import type {
  DAODataType,
  DAOContractParametersType,
} from "../../types/DAOdata";
import type { ProposalType } from "../../types/Proposals";
import { DAOStat } from "../../components/Stats";
import { DAOCard } from "@/components/DAOCard";
import { ShopDetailCard } from "@/components/ShopCard";

const DAOInfo: React.FC<{ daoData: DAODataType }> = ({ daoData }) => (
  <>
    <Card my={"4"}>
      <CardBody>
        <CardHeader>
          <Badge color={"brand.700"} size={"xs"} my={"2"}>
            Symbol: {daoData.symbol}
          </Badge>
          <Stack
            spacing="4"
            direction={{ base: "column", sm: "row" }}
            justify="space-between"
          >
            <Stack spacing="1">
              <Heading size="md">{daoData.name}</Heading>

              <Flex color="gray.500" fontSize="sm" py={2}>
                <Box>
                  <Badge size={"xs"}>Proposals: </Badge>
                  <Text as="span">{daoData.stats.proposals}</Text>
                </Box>
                <Box>
                  <Badge size={"xs"}>Holders: </Badge>
                  <Text as="span">{daoData.stats.holders}</Text>
                </Box>
                <Box>
                  <Badge size={"xs"}>Voters: </Badge>
                  <Text as="span">{daoData.stats.voters}</Text>
                </Box>
              </Flex>
            </Stack>
            <Button
              bgColor={"brandSubColor.700"}
              alignSelf="start"
              size={"lg"}
              color={"white"}
            >
              Join DAO
            </Button>
          </Stack>
        </CardHeader>

        <Heading size="md" px={4} py={4}>
          Contract Info
        </Heading>

        <Accordion defaultIndex={[0, 1]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Contract Addresses
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack
                spacing="4"
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
              >
                <Text fontSize="md" fontWeight="medium">
                  Governor
                </Text>
                <Text color="muted" fontSize="sm">
                  {daoData.contractParameters?.governor}
                </Text>
              </HStack>
              <HStack
                spacing="4"
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
              >
                <Text fontSize="md" fontWeight="medium">
                  Governance Token
                </Text>
                <Text color="muted" fontSize="sm">
                  {daoData.contractParameters?.token}
                </Text>
              </HStack>

              <HStack
                spacing="4"
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
              >
                <Text fontSize="md" fontWeight="medium">
                  Timelock
                </Text>
                <Text color="muted" fontSize="sm">
                  {daoData.contractParameters?.timelock}
                </Text>
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Contract Parameters
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack
                spacing="4"
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
              >
                <Text fontSize="md" fontWeight="medium">
                  Proposal threhold
                </Text>
                <Text color="muted" fontSize="sm">
                  {daoData.contractParameters?.proposalThreshold}
                </Text>
              </HStack>
              <HStack
                spacing="4"
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
              >
                <Text fontSize="md" fontWeight="medium">
                  Quorum needed
                </Text>
                <Text color="muted" fontSize="sm">
                  {daoData.contractParameters?.quorumNeeded}
                </Text>
              </HStack>
              <HStack
                spacing="4"
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
              >
                <Text fontSize="md" fontWeight="medium">
                  Proposal Delay
                </Text>
                <Text color="muted" fontSize="sm">
                  {daoData.contractParameters?.proposalDelay}
                </Text>
              </HStack>
              <HStack
                spacing="4"
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
              >
                <Text fontSize="md" fontWeight="medium">
                  Voting period
                </Text>
                <Text color="muted" fontSize="sm">
                  {daoData.contractParameters?.votingPeriod}
                </Text>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  </>
);

const ProposalsList: React.FC<{ proposals: ProposalType[] }> = ({
  proposals,
}) => (
  <VStack spacing="4" align="start">
    <Heading size="md">Proposals</Heading>
    {proposals.map((proposal, index) => (
      <Link key={index} onClick={() => router.push(`/proposal/${index}`)}>
        <Icon as={FiFileText} boxSize="5" />
        {proposal.title}
      </Link>
    ))}
  </VStack>
);

export default function Dao() {
  const router = useRouter();
  const { id } = router.query;

  const { name, storeUrl, symbol, stats, proposals, contractParameters } =
    DAOData;

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
      <DAOInfo daoData={DAOData} />

      <ShopDetailCard
        key={String(id)}
        name={name}
        storeUrl={storeUrl}
        symbol={symbol}
        stats={stats}
        id={String(id)}
      />
      <Box
        borderWidth={{ base: "0", md: "1px" }}
        p={{ base: "0", md: "4" }}
        borderRadius="lg"
      >
        <Stack
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          spacing="5"
        >
          {proposals ? (
            <ProposalsList proposals={proposals} />
          ) : (
            <Alert status="info">
              <AlertIcon />
              No proposals
            </Alert>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
