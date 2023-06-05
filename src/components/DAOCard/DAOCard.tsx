import { OgObject } from 'open-graph-scraper/dist/lib/types';

import { DAOStatsType } from "@/types/DAOdata";
import {
  Button,
  Box,
  Text,
  Image,
  Badge,
  Stack,
  HStack,
  Link,
  Flex,
  VStack,
  Divider,
} from "@chakra-ui/react";

type DAOCardProps = {
  id: string;
  name: string;
  storeUrl: string;
  symbol: string;
  stats: DAOStatsType;
};

export const DAOCard: React.FC<DAOCardProps & { og: OgObject }> = ({
  id,
  name,
  storeUrl,
  symbol,
  stats,
  og
}) => (
  <Box
    width={{ base: "full", md: "auto" }}
    bg="bg-surface"
    px={{ base: "4", md: "6" }}
    py="4"
    rounded="lg"
    borderRadius="lg"
    m={"2"}
    borderColor="accent"
    backgroundColor={"white"}
  >
    <Stack
      spacing="4"
      direction={{ base: "column", sm: "row" }}
      justify="space-between"
    >
      <HStack spacing="4" justifyContent="space-between" width="full">
        <Link href={`/dao/${id}`}>
          <Box>
            <Text fontSize="sm" fontWeight="medium">
              {name}
            </Text>
            <Badge size={"xs"}>Symbol: {symbol}</Badge>
          </Box>
        </Link>
        <VStack py={"2"}>
          <Stack
            spacing="4"
            direction={{ base: "column", sm: "row" }}
            justifyContent="space-between"
            width="full"
          >
            <Image
              boxSize={{ base: "80px", sm: "100px" }}
              objectFit="cover"
              src={(typeof og.ogImage === 'string' ? og.ogImage : Array.isArray(og.ogImage) ? og.ogImage.at(0)?.url : og.ogImage?.url) ?? 'https://htmlburger.com/blog/wp-content/uploads/2022/07/Shopify-Website-Examples.jpg'}
              alt={og.ogTitle}
            />
            <VStack align="start">
              <Text fontSize="sm" fontWeight="bold">
                {og.ogTitle}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {og.ogDescription}
              </Text>
              <Button
                size={"xs"}
                as="a"
                href={storeUrl}
                colorScheme="brandSubColor"
              >
                Go to Store
              </Button>
            </VStack>
          </Stack>
        </VStack>
      </HStack>
    </Stack>
    <Divider my="2" />
    <Flex justify="space-between" color="gray.500" fontSize="sm">
      <Box>
        <Text as="span" fontWeight="bold">
          Proposals:{" "}
        </Text>
        <Text as="span">{stats.proposals}</Text>
      </Box>
      <Box>
        <Text as="span" fontWeight="bold">
          Holders:{" "}
        </Text>
        <Text as="span">{stats.holders}</Text>
      </Box>
      <Box>
        <Text as="span" fontWeight="bold">
          Voters:{" "}
        </Text>
        <Text as="span">{stats.voters}</Text>
      </Box>
    </Flex>
  </Box>
);
