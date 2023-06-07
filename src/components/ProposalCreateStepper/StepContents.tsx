import { DaoCreater } from "../DaoCreater";
import { StoreInfoFetcher } from "../StoreInfoFetcher";
import { ProposalCrateEditor } from "./ProposalCreateEditor";
import { ProposalCreatePreview } from "./ProposalCreatePreview";
import { ProposalCreateRoleConfiguration } from "./ProposalCreateRoleConfiguration";
import { useStep } from "./useStep";

export const stepContents = [
  {
    title: "Step 1",
    description: "",
    children: <ProposalCreateRoleConfiguration />,
  },
  {
    title: "Step 2",
    description: "",
    children: <ProposalCrateEditor />,
  },
  {
    title: "Step 3",

    description: "",
    children: <ProposalCreatePreview />,
  },
];
