export interface ProposalType {
  status: string;
  title: string;
  id: string;
  date: string;
  description: string;
  // Add more details as per your requirements
}
export interface ProposalDetailsType {
  description: string;
  executableCode: string;
}

export interface VoteType {
  userImg: string;
  voter: string;
  voteValue: string;
}

export interface StatusUpdateType {
  date: string;
  action: string;
}
