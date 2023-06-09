import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
  Link,
  Flex,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import router from "next/router";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => (
  <Box bg="brand.100" color="on-accent" mx="auto" px={{ base: "6", md: "8" }}>
    <Stack
      spacing="8"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      py={{ base: "12", md: "16" }}
    >
      <Stack spacing={{ base: "6", md: "8" }} align="start">
        <Link href="/">
          <Flex alignItems="center">
            <Image
              src="/img/logo.png"
              boxSize="25px"
              objectFit="cover"
              alt="logo"
              mr={2}
            />

            <Text
              fontSize="xl"
              fontWeight="bold"
              bgGradient="linear(to-r, brand.900,brandSubColor.900)"
              bgClip="text"
            >
              ShopDAO generator
            </Text>
          </Flex>
        </Link>
        <Text color="on-accent-muted">
          Revolutionizing Commerce
          <br /> Drive Profits and Decisions with Your Fans
        </Text>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "column", lg: "row" }}
        spacing={{ base: "12", md: "8" }}
      >
        {/* <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="on-accent-subtle"
              >
                Product
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link-on-accent">How it works</Button>
                <Button variant="link-on-accent">Pricing</Button>
                <Button variant="link-on-accent">Use Cases</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="on-accent-subtle"
              >
                Legal
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link-on-accent">Privacy</Button>
                <Button variant="link-on-accent">Terms</Button>
                <Button variant="link-on-accent">License</Button>
              </Stack>
            </Stack>
          </Stack> */}
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="gray.500">
            Stay up to date
          </Text>
          <Stack
            spacing="4"
            direction={{ base: "column", sm: "row" }}
            maxW={{ lg: "360px" }}
          >
            {/* <Input
              placeholder="Enter your email"
              type="email"
              required
              variant="outline-on-accent"
            /> */}
            <Button
              variant="primary-on-accent"
              type="submit"
              flexShrink={0}
              textColor={"white"}
              onClick={() => {
                router.push("https://rj37ob59e54.typeform.com/to/gFqXvteu");
              }}
              bgColor={"brand.900"}
            >
              Keep in touch with us!
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider borderColor="bg-accent-subtle" />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
    >
      <Text fontSize="sm" color="on-accent-subtle">
        &copy; {new Date().getFullYear()} ShopDAO generator, Inc. All rights
        reserved.
      </Text>
      <ButtonGroup variant="ghost-on-accent">
        {/* <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          /> */}
        <IconButton
          as="a"
          href="#"
          aria-label="GitHub"
          icon={<FaGithub fontSize="1.25rem" />}
          onClick={() => {
            router.push(
              "https://github.com/0xShin0221/Frontend_ShopDAOGenerator_Chainlink2023"
            );
          }}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="1.25rem" />}
        />
      </ButtonGroup>
    </Stack>
  </Box>
);
