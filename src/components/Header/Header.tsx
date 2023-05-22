import { memo } from "react";
import { Flex } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { _abiDaoFactory } from "../../../abi";

export const Header = memo((): JSX.Element => {
  return (
    <Flex justifyContent="flex-end" boxShadow="md" p="1rem 1.5rem" borderBottomRadius="2xl" width="100%">
      <ConnectButton />
    </Flex>
  );
});

Header.displayName = "Layout";
