import {
  ReactNode,
  memo,
} from "react";
import {
  VStack,
} from "@chakra-ui/react";

import { _abiDaoFactory } from "../../../abi";
import { Header } from "@/components";

type Props = {
  children: ReactNode
}

export const Layout = memo(({ children }: Props): JSX.Element => {

  return (
    <VStack p="1rem">
      <Header />
      {children}
    </VStack>
  );
});
Layout.displayName = "Layout";
