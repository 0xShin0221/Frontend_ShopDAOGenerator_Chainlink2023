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

interface ShopDetailCardProps {
  storeUrl: string;
}
export const ShopDetailCard: React.FC<ShopDetailCardProps> = ({ storeUrl }) => (
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
          <Heading size="md" my={"2"}>
            Sample OGP Title Client Report
          </Heading>

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
