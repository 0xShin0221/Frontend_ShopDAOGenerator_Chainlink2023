import { Mumbai, Polygon } from "@thirdweb-dev/chains";

export const getChain = () => process.env.NODE_ENV === "production"
? Polygon // Matic
: Mumbai; // Mumbai