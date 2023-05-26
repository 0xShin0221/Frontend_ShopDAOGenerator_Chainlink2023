import { Proposal as DAOProposal } from "./Proposals";
export interface DAOStatsType {
  proposals: number;
  holders: number;
  voters: number;
}

export interface DAOContractParametersType {
  proposalThreshold: number;
  quorumNeeded: string;
  proposalDelay: string;
  votingPeriod: string;
  governor: string;
  token: string;
  timelock: string;
}

export interface DAODataType {
  name: string;
  storeUrl: string;
  symbol: string;
  stats: DAOStatsType;
  proposals: DAOProposal[];
  contractParameters: DAOContractParametersType;
}
