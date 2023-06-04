import { Mumbai, Polygon } from "@thirdweb-dev/chains";

export const getChain = () => {
    console.log('NODE_ENV', process.env.NODE_ENV)
    return process.env.NODE_ENV === "production"
        ? Polygon // Matic
        : Mumbai; // Mumbai
}