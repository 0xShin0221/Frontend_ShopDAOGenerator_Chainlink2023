import { ProposalType } from "./Proposals";

export type DAOStatsType = {
  proposals: number;
  holders: number;
  voters: number;
};

export type DAOContractParametersType = {
  proposalThreshold: number;
  quorumNeeded: string;
  proposalDelay: string;
  votingPeriod: string;
  governor: string;
  token: string;
  timelock: string;
};

export type DAODataType = {
  name: string;
  storeUrl: string;
  symbol: string;
  stats: DAOStatsType;
  proposals: ProposalType[];
  contractParameters: DAOContractParametersType;
};
