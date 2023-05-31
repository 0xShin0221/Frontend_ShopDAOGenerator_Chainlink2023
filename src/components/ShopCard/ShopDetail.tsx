import { DAODataType } from "@/types/DAOdata";
import {
  Button,
  Text,
  Image,
  Stack,
  Heading,
  CardFooter,
  CardBody,
  Flex,
  VStack,
  Box,
  Card,
  CardHeader,
} from "@chakra-ui/react";
import { OgObject } from "open-graph-scraper/dist/lib/types";
import { FiExternalLink } from "react-icons/fi";

interface ShopDetailCardProps {
  storeUrl: string;
  og: OgObject;
}
export const ShopDetailCard: React.FC<ShopDetailCardProps> = ({ storeUrl, og }) => (
  <Card
    width={{ base: "full", md: "auto" }}
    bg="bg-surface"
    rounded="lg"
    borderRadius="lg"
    borderColor="accent"
    backgroundColor={"white"}
    overflow="hidden"
    variant="outline"
  >
    <Flex direction={{ base: "column", md: "row" }} align="center">
      <Box maxW={{ base: "100%", sm: "600px" }}>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "600px" }}
          src={(typeof og.ogImage === 'string' ? og.ogImage : Array.isArray(og.ogImage) ? og.ogImage.at(0)?.url : og.ogImage?.url) ?? 'https://htmlburger.com/blog/wp-content/uploads/2022/07/Shopify-Website-Examples.jpg'}
          alt={og.ogTitle}
        />
      </Box>

      <VStack align="start" spacing="3">
        <CardBody>
          <Heading size="md" my={"2"}>
            {og.ogTitle}
          </Heading>

          <Heading size="xs" textTransform="uppercase">
            OGP data ref
          </Heading>
          <Text py="2">
            {og.ogDescription}
          </Text>
          <Heading size="xs" textTransform="uppercase">
            Overview
          </Heading>
          <Text py="2">
            {og.ogDescription}
          </Text>
        </CardBody>
      </VStack>
    </Flex>
    <CardFooter
      justify="space-between"
      flexWrap="wrap"
      sx={{
        "& > button": {
          minW: "136px",
        },
      }}
    >
      <Button colorScheme="brand" as="a" href={storeUrl} size={"lg"} w="full">
        <FiExternalLink /> Go to Store
      </Button>
    </CardFooter>
  </Card>
);
