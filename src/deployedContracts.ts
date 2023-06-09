export type DeployedContracts = {
  DaoFactory: string;
};

export type Network = "Sepolia" | "Mumbai" | "Matic";

function getDeployedContracts(network: Network): DeployedContracts {
  switch (network) {
    case "Sepolia":
      return {
        DaoFactory: "0x29DAad9fB69d2F8c25bDEeabE4807Dbd8a27A43E",
      };
    case "Mumbai":
      return {
        DaoFactory: "",
      };
    case "Matic":
      return {
        DaoFactory: "",
      };
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
}

export { getDeployedContracts };
