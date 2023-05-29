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
import { FiExternalLink } from "react-icons/fi";

export const ShopDetailCard: React.FC<DAODataType> = ({
  id,
  name,
  storeUrl,
  symbol,
  stats,
}) => (
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
          src="https://htmlburger.com/blog/wp-content/uploads/2022/07/Shopify-Website-Examples.jpg"
          alt="Shop OGP"
        />
      </Box>

      <VStack align="start" spacing="3">
        <CardBody>
          <CardHeader>
            <Heading size="md">Sample OGP Title Client Report</Heading>
          </CardHeader>
          <Heading size="xs" textTransform="uppercase">
            OGP data ref
          </Heading>
          <Text py="2">
            Sample OGP Description that summarizes the content of the website.
          </Text>
          <Heading size="xs" textTransform="uppercase">
            Overview
          </Heading>
          <Text py="2">
            Sample OGP Description that summarizes the content of the website.
          </Text>
        </CardBody>
        <CardFooter justify="space-between" flexWrap="wrap">
          <Button colorScheme="brand" as="a" href={storeUrl} size={"lg"}>
            <FiExternalLink /> Go to Store
          </Button>
        </CardFooter>
      </VStack>
    </Flex>
  </Card>
);
