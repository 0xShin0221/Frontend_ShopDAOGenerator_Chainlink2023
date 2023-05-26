import { DAODataType } from "../types/DAOdata";
export const DAOData: DAODataType = {
  name: "DAO Name",
  storeUrl: "https://google.com",
  symbol: "DAO",
  stats: { proposals: 3, holders: 3, voters: 3 },
  proposals: [
    {
      status: "EXECUTED",
      title:
        "[EP3.5] [Executable] Activate new .eth Controller and Reverse Registrar",
      id: "429737...8242",
      date: "Mar 29th, 2023",
      description: "Proposal executed",
    },
    {
      title: "Proposal 2",
      status: "EXECUTED",
      id: "429737...8242",
      date: "Mar 29th, 2023",
      description: "Proposal executed",
    },
    {
      title: "Proposal 3",
      status: "EXECUTED",
      id: "429737...8242",
      date: "Mar 29th, 2023",
      description: "Proposal executed",
    },
  ],
  contractParameters: {
    proposalThreshold: 0,
    quorumNeeded: "11.85M",
    proposalDelay: "a few seconds",
    votingPeriod: "5 hours",
    governor: "0xcDF27F107725988f2261Ce2256bDfCdE8B382B10",
    token: "0x4200000000000000000000000000000000000042",
    timelock: "0xcDF27F107725988f2261Ce2256bDfCdE8B382B10",
  },
};
