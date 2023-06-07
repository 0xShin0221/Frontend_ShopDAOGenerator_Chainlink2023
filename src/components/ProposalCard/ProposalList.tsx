import { ProposalType } from "@/types/Proposals";
import {
  Card,
  Stack,
  useBreakpointValue,
  Text,
  Heading,
  Button,
  SimpleGrid,
  Link,
  Box,
  Image,
  HStack,
  Avatar,
} from "@chakra-ui/react";

export const ProposalList: React.FC<{ proposals: ProposalType[] }> = ({
  proposals,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Card my="4" p={"4"}>
      <Stack spacing={{ base: "12", md: "16" }} m={"4"}>
        <Stack direction="row" justify="space-between">
          <Stack spacing={{ base: "4", md: "6" }}>
            <Stack spacing="4">
              <Heading size={{ base: "md", md: "lg" }}>
                Latest proposals
              </Heading>
            </Stack>
          </Stack>
          {!isMobile && (
            <Button bgColor="brandSubColor" size="lg">
              Show all
            </Button>
          )}
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: "12", lg: "8" }}
        >
          {proposals.length > 0 ? (
            proposals.map((proposal) => (
              <Link
                href={`/proposal/${proposal.id}`}
                key={proposal.id}
                _hover={{ textDecor: "none" }}
                role="group"
              >
                <Stack spacing="8">
                  <Box overflow="hidden">
                    <Image
                      src={proposal.imageUrl[0]}
                      alt={proposal.title}
                      width="full"
                      height="15rem"
                      objectFit="cover"
                      transition="all 0.2s"
                      _groupHover={{ transform: "scale(1.05)" }}
                    />
                  </Box>
                  <Stack spacing="3">
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="brandSubColor.900"
                    >
                      {proposal.category}
                    </Text>
                    <Heading size="xs">{proposal.title}</Heading>
                    <Text color="muted">{proposal.description}</Text>
                  </Stack>
                  <HStack>
                    <Avatar src={proposal.author.avatarUrl} boxSize="10" />
                    <Box fontSize="sm">
                      <Text fontWeight="medium">{proposal.author.name}</Text>
                      <Text color="muted">{proposal.createdAt}</Text>
                      <Text color="muted">{proposal.updatedAt}</Text>
                    </Box>
                  </HStack>
                </Stack>
              </Link>
            ))
          ) : (
            <Text>No proposals available</Text>
          )}
        </SimpleGrid>
        {isMobile && (
          <Button variant="primary" size="lg">
            Show all
          </Button>
        )}
      </Stack>
    </Card>
  );
};
