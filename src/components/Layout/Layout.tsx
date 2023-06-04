import { ReactNode, memo, useContext } from "react";
import { Box, Container, VStack } from "@chakra-ui/react";

import { _abiDaoFactory } from "../../../abi";
import { Header, Loading } from "@/components";
import { Footer } from "../Footer";
import { NftContractContext } from "@/contexts";

type Props = {
  children: ReactNode;
};

export const Layout = memo(({ children }: Props): JSX.Element => {
  const store = useContext(NftContractContext)
  return (
    <>
      <Header />
      {store.isLoading ? <Loading /> : children}
      <Footer />
    </>
  );
});
Layout.displayName = "Layout";
