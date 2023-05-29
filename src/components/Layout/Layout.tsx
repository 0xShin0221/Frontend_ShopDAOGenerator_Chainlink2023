import { ReactNode, memo } from "react";
import { Box, Container, VStack } from "@chakra-ui/react";

import { _abiDaoFactory } from "../../../abi";
import { Header } from "@/components";
import { Footer } from "../Footer";

type Props = {
  children: ReactNode;
};

export const Layout = memo(({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
});
Layout.displayName = "Layout";
