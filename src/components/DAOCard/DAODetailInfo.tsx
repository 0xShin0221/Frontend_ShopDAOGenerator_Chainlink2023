import { DAODataType } from "@/types/DAOdata";
import {
  Card,
  CardBody,
  CardHeader,
  Badge,
  Stack,
  Heading,
  Flex,
  Box,
  Text,
  Accordion,
  Button,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  HStack,
  CardFooter,
} from "@chakra-ui/react";

export const DAODetailInfo: React.FC<{ daoData: DAODataType }> = ({
  daoData,
}) => (
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
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button
          bgColor={"brandSubColor.700"}
          alignSelf="start"
          size={"lg"}
          color={"white"}
          w="full"
        >
          Join DAO
        </Button>
      </CardFooter>
    </Card>
  </>
);
