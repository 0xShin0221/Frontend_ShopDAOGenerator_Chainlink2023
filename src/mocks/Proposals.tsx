import {
  ProposalType,
  ProposalDetailsType,
  StatusUpdateType,
  VoteType,
} from "@/types/Proposals";

export const proposalData: ProposalType = {
  status: "EXECUTED",
  title:
    "[EP3.5] [Executable] Activate new .eth Controller and Reverse Registrar",
  id: "429737...8242",
  date: "Mar 29th, 2023",
  description: "Proposal executed",
  // Add more details as per your requirements
};

export const proposalDetails: ProposalDetailsType = {
  description: "Description of the proposal",
  executableCode: "Executable code of the proposal",
};

export const votes: VoteType[] = [
  {
    userImg: "https://example.com/image1.jpg",
    voter: "kkn.eth",
    voteValue: "17.34",
  },
  {
    userImg: "https://example.com/image2.jpg",
    voter: "chinakungfu.eth",
    voteValue: "1.83",
  },
  {
    userImg: "https://example.com/image3.jpg",
    voter: "ungoo.eth",
    voteValue: "1",
  },
  {
    userImg: "https://example.com/image4.jpg",
    voter: "0x7f2e...74d4",
    voteValue: "0",
  },
];

export const statusUpdates: StatusUpdateType[] = [
  { date: "Wed Mar 29 18:56pm", action: "Draft created" },
  { date: "Wed Mar 29 18:56pm", action: "Published on-chain" },
  { date: "Wed Mar 29 18:57pm", action: "Voting period started" },
  { date: "2 months ago", action: "Voting period ended" },
  { date: "Wed Apr 5 20:10pm", action: "Proposal queued" },
  { date: "Fri Apr 7 20:12pm", action: "Proposal executed" },
];
