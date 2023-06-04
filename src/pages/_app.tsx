import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  polygonMumbai,
  goerli,
  mainnet,
  polygon,
  optimism,
  arbitrum,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { useEffect } from "react";
import { Layout } from "@/components";
import { NftContractProvider } from "@/contexts";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { getChain } from "@/helper";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [goerli, polygonMumbai]
      : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const colors = {
  brand: {
    900: "#60b858",
    800: "#72c66a",
    700: "#84d47c",
    600: "#96e28e",
    500: "#a8f0a0",
    400: "#bafdb2",
    300: "#ccf8c4",
    200: "#deffd6",
    100: "#f0ffe8",
    50: "#f8fffa",
  },
  brandSubColor: {
    900: "#bf4869",
    800: "#c7607b",
    700: "#cf788d",
    600: "#d7909f",
    500: "#dfabb1",
    400: "#e8c5c3",
    300: "#f0dfd5",
    200: "#f8f9e7",
    100: "#fffff9",
    50: "#ffffff",
  },
  fonts: {
    heading: "Open Sans",
    body: "Roboto",
  },
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "48px",
    "4xl": "64px",
  },
  space: {
    1: "0.25rem",
    2: "0.5rem",
    3: "1rem",
    4: "2rem",
    5: "4rem",
    6: "8rem",
    7: "16rem",
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
};

export const theme = extendTheme({ colors });

const chain = getChain()

export default function App({ Component, pageProps }: AppProps) {
  // https://github.com/wagmi-dev/wagmi/issues/542#issuecomment-1479062192
  useEffect(() => {
    wagmiConfig.autoConnect();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <ThirdwebProvider activeChain={chain}>
            <NftContractProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </NftContractProvider>
          </ThirdwebProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}
