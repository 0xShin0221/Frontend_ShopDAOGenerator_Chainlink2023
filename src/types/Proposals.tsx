type ProposalState =
  | "Pending"
  | "Active"
  | "Canceled"
  | "Defeated"
  | "Succeeded"
  | "Queued"
  | "Expired"
  | "Executed";

export type ProposalType = {
  status: ProposalState;
  title: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  imageUrl: string[];
  category: "ProductPropose" | "GeneralPropose";
  author: {
    name: string;
    avatarUrl: string;
  };
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
