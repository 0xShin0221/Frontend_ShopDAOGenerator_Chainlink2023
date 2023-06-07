import { DaoCreater } from "../DaoCreater";
import { StoreInfoFetcher } from "../StoreInfoFetcher";
import { Contents } from "./Contents";
import { useStep } from "./useStep";

export const steps = [
  {
    title: "Step 1",
    description: "Description",
    children: <Contents />,
  },
  {
    title: "Step 2",
    description: "Description",
    children: "dd",
  },
  {
    title: "Step 3",

    description: "Description",
    children: <Contents />,
  },
  {
    title: "Step 4",
    description: "Description",
    children: <Contents />,
  },
  {
    title: "Step 5",
    description: "Description",
    children: <Contents />,
  },
];
