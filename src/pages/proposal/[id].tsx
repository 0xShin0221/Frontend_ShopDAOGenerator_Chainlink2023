import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  Heading,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { GoCalendar, GoPencil, GoGlobe } from "react-icons/go";
import { useRouter } from "next/router";
import {
  proposalData,
  proposalDetails,
  votes,
  statusUpdates,
} from "../../mocks/Proposals";
import { ReactNode } from "react";
import { Proposal, ProposalDetails, Vote } from "@/types/Proposals";

interface Props {
  children: ReactNode;
}

export const Card: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.100", "gray.800")}
      py="4"
      px="8"
      mx="4"
      mb="0"
      borderRadius="xl"
      boxShadow="xl"
    >
      {children}
    </Box>
  );
};

const ProposalCard: React.FC<{ proposal: Proposal }> = ({ proposal }) => (
  <Card>
    <Stack spacing="4">
      <Avatar size="2xl" name={proposal.title} />
      <Heading as="h2" fontWeight="bold" fontSize="2xl">
        {proposal.title}
      </Heading>
      <Text mt="2">{proposal.description}</Text>
    </Stack>
  </Card>
);

const DetailCard: React.FC<{ details: ProposalDetails }> = ({ details }) => (
  <Card>
    <Box>
      <Heading as="h2" fontWeight="bold" fontSize="2xl">
        Details
      </Heading>
      <Text mt="2">{details.description}</Text>
      <Text mt="2">{details.executableCode}</Text>
    </Box>
  </Card>
);

const VotesCard: React.FC<{ votes: Vote[] }> = ({ votes }) => (
  <Card>
    <Box>
      <Heading as="h2" fontWeight="bold" fontSize="2xl">
        Votes
      </Heading>
      {votes.map((vote, index) => (
        <HStack key={index} spacing={2}>
          <Avatar src={vote.userImg} />
          <Text>{vote.voter}</Text>
          <Text>{vote.voteValue}</Text>
        </HStack>
      ))}
    </Box>
  </Card>
);

const StatusCard: React.FC<{ statusUpdates: StatusUpdate[] }> = ({
  statusUpdates,
}) => (
  <Card>
    <Box>
      <Heading as="h2" fontWeight="bold" fontSize="2xl">
        Status Updates
      </Heading>
      {statusUpdates.map((update, index) => (
        <VStack align="start" key={index} spacing={2}>
          <Text>{update.date}</Text>
          <Text>{update.action}</Text>
        </VStack>
      ))}
    </Box>
  </Card>
);

export default function ProposalPage() {
  const router = useRouter();

  return (
    <>
      <Grid
        templateRows={{ base: "auto", md: "auto" }}
        templateColumns={{ base: "1fr", md: "2fr 1fr" }}
        gap={1}
      >
        <GridItem rowSpan={1} colSpan={{ base: 1, md: 3 }}>
          <ProposalCard proposal={proposalData} />
        </GridItem>
        <GridItem rowSpan={2}>
          <DetailCard details={proposalDetails} />
        </GridItem>
        <GridItem rowStart={2} colStart={{ base: 1, md: 2 }}>
          <VotesCard votes={votes} />
        </GridItem>
        <GridItem rowStart={3} colStart={{ base: 1, md: 2 }}>
          <StatusCard statusUpdates={statusUpdates} />
        </GridItem>
      </Grid>
    </>
  );
}
