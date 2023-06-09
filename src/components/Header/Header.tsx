import { memo } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { _abiDaoFactory } from "../../../abi";
import Link from "next/link";
import { Banner } from "./Banner";

export const Header = memo((): JSX.Element => {
  const logoStyles = {
    background: "linear-gradient(to right, #60b858, #b21f1f, #fdbb2d)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="1.5rem"
        py="1rem"
        borderBottomRadius="2xl"
        backgroundColor={"#fff"}
        width="100%"
        aria-label="Header section"
      >
        <Link href="/">
          <Flex alignItems="center">
            <Image
              src="/img/logo.png" // replace with your logo path
              boxSize="25px" // adjust as needed
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
        <ConnectButton aria-label="Connect to Wallet" />
      </Flex>
      <Banner />
    </>
  );
});

Header.displayName = "Layout";
