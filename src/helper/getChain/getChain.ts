import { Mumbai, Polygon } from "@thirdweb-dev/chains";
import { ChainId } from "@thirdweb-dev/sdk";

export const getChain = () => ChainId.Polygon === Number(process.env.NEXT_PUBLIC_CHAIN_ID)
    ? Polygon // Matic
    : Mumbai; // Mumbai