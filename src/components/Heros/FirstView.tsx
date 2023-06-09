import {
  Box,
  Button,
  Heading,
  Img,
  LightMode,
  Stack,
  Text,
  useColorModeValue as mode,
  useBreakpointValue,
} from "@chakra-ui/react";

import { memo } from "react";
import router from "next/router";

export const FirstView = memo((): JSX.Element => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box>
      <Box as="section" bg="brand.800" color="white" py="7.5rem">
        <Box
          maxW={{ base: "xl", md: "5xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <Box textAlign="center" justifyContent={"center"}>
            <Heading
              as="h1"
              size="2xl"
              fontWeight="extrabold"
              maxW="full"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              Revolutionizing Commerce
              <br /> Drive Profits and Decisions with Your Fans
            </Heading>
            <Text fontSize="xl" mt="4" maxW="xl" mx="auto">
              Embrace the future with ShopDAO Generator: an advanced DAO model
              for retail, where every fan becomes a stakeholder. Welcome to the
              next stage of commerce
            </Text>
          </Box>

          <Stack
            justify="center"
            direction={{ base: "column", md: "row" }}
            mt="10"
            mb="20"
            spacing="4"
          >
            <LightMode>
              <Button
                as="a"
                href="#"
                size="lg"
                colorScheme="pink"
                px="8"
                fontWeight="bold"
                fontSize="md"
                onClick={() => {
                  router.push("https://rj37ob59e54.typeform.com/to/gFqXvteu");
                }}
              >
                Join waitlist
              </Button>
              <Button
                as="a"
                href="#"
                size="lg"
                colorScheme="whiteAlpha"
                px="8"
                fontWeight="bold"
                fontSize="md"
                onClick={() => {
                  router.push("https://rj37ob59e54.typeform.com/to/Wr6hak0f");
                }}
              >
                Request demo
              </Button>
            </LightMode>
          </Stack>

          <Img
            borderRadius={"2xl"}
            alt="System architect for users"
            src={isMobile ? "gif/mobile-workflow.gif" : "gif/pc-workflow.gif"}
            mx="auto"
            width={{ base: "100%", md: "100%" }}
            height={{ base: "50%", md: "90%" }}
            objectFit="contain"
          />
        </Box>
      </Box>

      {/* <Box as="section" py="24">
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <Text
            fontWeight="bold"
            fontSize="sm"
            textAlign="center"
            textTransform="uppercase"
            letterSpacing="wide"
            color={mode("gray.600", "gray.400")}
          >
            Trusted by over 6,000 purples
          </Text>
          <SimpleGrid
            mt="8"
            columns={{ base: 1, md: 2, lg: 6 }}
            color="gray.500"
            alignItems="center"
            justifyItems="center"
            spacing={{ base: "12", lg: "24" }}
            fontSize="2xl"
          >
            <Logos.ChatMonkey />
            <Logos.Wakanda />
            <Logos.Lighthouse />
            <Logos.Plumtic />
            <Logos.WorkScout />
            <Logos.Finnik />
          </SimpleGrid>
        </Box>
      </Box> */}
    </Box>
  );
});
FirstView.displayName = "FirstView";
