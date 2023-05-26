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

const DAOInfo: React.FC<{ daoData: DAODataType }> = ({ daoData }) => (
  <>
    <Heading size={{ base: "sm", md: "md" }}>{daoData.name}</Heading>
    <HStack>
      <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
        Symbol: {daoData.symbol}
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "6" }}>
        <DAOStat label="Proposals" value={daoData.stats.proposals} limit={10} />
        <DAOStat label="Holders" value={daoData.stats.holders} limit={10} />
        <DAOStat label="Voters" value={daoData.stats.voters} limit={10} />
      </SimpleGrid>
    </HStack>
    <Button
      colorScheme="brandSubColor"
      variant="ghost"
      as="a"
      href={daoData.storeUrl}
    >
      <FiExternalLink /> Go to Store
    </Button>
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

const ContractParameters: React.FC<{
  contractParameters: DAOContractParametersType;
}> = ({ contractParameters }) => (
  <VStack spacing="4" align="start">
    <Heading size="md">Contract Addresses</Heading>
    <Link onClick={() => router.push(`/contract/${name}`)}>
      <Icon as={FiSettings} boxSize="5" />
      Contract Parameters
    </Link>
    <Text>Proposal threshold: {contractParameters.proposalThreshold}</Text>
    <Text>Quorum needed: {contractParameters.quorumNeeded}</Text>
    <Text>Proposal delay: {contractParameters.proposalDelay}</Text>
    <Text>Voting period: {contractParameters.votingPeriod}</Text>
    <Text>Governor: {contractParameters.governor}</Text>
    <Text>Token: {contractParameters.token}</Text>
    <Text>Timelock: {contractParameters.timelock}</Text>
  </VStack>
);

export default function Dao() {
  const router = useRouter();
  const { id } = router.query;

  const { proposals, contractParameters } = DAOData;

  return (
    <Container maxW="3xl">
      <Box
        bg="bg-surface"
        boxShadow="sm"
        borderRadius="lg"
        p={{ base: "4", md: "6" }}
      >
        <Stack spacing="5">
          <Stack spacing="1">
            <DAOInfo daoData={DAOData} />
          </Stack>
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
              <ProposalsList proposals={proposals} />
            </Stack>
          </Box>
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
              <ContractParameters contractParameters={contractParameters} />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
