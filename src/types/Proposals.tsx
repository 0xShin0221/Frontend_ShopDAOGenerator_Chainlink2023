export type ProposalType = {
  status: string;
  title: string;
  id: string;
  date: string;
  description: string;
};

export type ProposalDetailsType = {
  description: string;
  executableCode: string;
};

export type VoteType = {
  userImg: string;
  voter: string;
  voteValue: string;
};

export type StatusUpdateType = {
  date: string;
  action: string;
};
