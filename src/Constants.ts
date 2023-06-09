export type DeployedContracts = {
  DaoFactory: string;
  FunctionsClient: string;
};

export type Network = "Sepolia" | "Mumbai" | "Matic";

const chain = process.env.NEXT_PUBLIC_CHAIN_NAME as Network;
if (chain === undefined) {
  throw new Error("process.env.NEXT_PUBLIC_CHAIN_NAME is undefined");
}

function getDeployedContracts(network: Network): DeployedContracts {
  switch (network) {
    case "Sepolia":
      return {
        DaoFactory: "0x29DAad9fB69d2F8c25bDEeabE4807Dbd8a27A43E",
        FunctionsClient: "0x4E1DDBC9390879Da82AcD765F8073058Ad750ec6",
      };
    case "Mumbai":
      return {
        DaoFactory: "",
        FunctionsClient: "",
      };
    case "Matic":
      return {
        DaoFactory: "",
        FunctionsClient: "",
      };
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
}

function getChainlinkSubscriptionId(network: Network): Number {
  switch (network) {
    case "Sepolia":
      return 451;
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
}

export { getDeployedContracts, chain, getChainlinkSubscriptionId };
