import {
  Button,
  Box,
  Text,
  Avatar,
  Badge,
  Stack,
  HStack,
  SimpleGrid,
  Container,
  Link,
} from "@chakra-ui/react";

interface DAOCardProps {
  id: string;
  daoName: string;
  storeUrl: string;
  symbol: string;
  stats: { proposals: number; holders: number; voters: number };
}

export const DAOCard: React.FC<DAOCardProps> = ({
  id,
  daoName,
  storeUrl,
  symbol,
  stats,
}) => (
  <Box
    width={{ base: "full", md: "auto" }}
    bg="bg-surface"
    px={{ base: "4", md: "6" }}
    py="5"
    boxShadow="sm"
    borderColor="accent"
  >
    <Stack
      spacing="4"
      direction={{ base: "column", sm: "row" }}
      justify="space-between"
    >
      <Link href={`/dao/${id}`}>
        <HStack spacing="4">
          <Avatar
            src="https://tinyurl.com/yhkm2ek8"
            name={daoName}
            boxSize={{ base: "12", sm: "14" }}
          />
          <Box>
            <HStack>
              <Text fontSize="lg" fontWeight="medium">
                {daoName}
              </Text>
              <Badge variant="subtle" colorScheme="purple">
                Symbol: {symbol}
              </Badge>
            </HStack>
            <Text color="muted" fontSize="sm">
              Proposals: {stats.proposals}, Holders: {stats.holders}, Voters:{" "}
              {stats.voters}
            </Text>
          </Box>
        </HStack>
      </Link>
      <Stack direction="row" spacing="3">
        <Button
          as="a"
          href={storeUrl}
          colorScheme="brandSubColor"
          variant="ghost"
        >
          Go to Store
        </Button>
      </Stack>
    </Stack>
  </Box>
);
