import { SetStateAction, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  Text,
  Textarea,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Dropzone } from "../Dropzone";
import { FiBox, FiDatabase } from "react-icons/fi";

import { RadioCard, RadioCardGroup } from "../RadioCard";
import { ProductProposeForm } from "./ProductProposeForm";
import { GeneralProposeForm } from "./GeneralProposeForm";

const radioCardData = [
  {
    label: "Product propose",
    description: "Proposal of products to be sold through EC",
    icon: FiBox,
    borderColor: "green.200",
  },
  {
    label: "General propose",
    description: "Proposal regarding funds operated by this DAO",
    icon: FiDatabase,
    borderColor: "gray.100",
  },
];
export const ProposalCrateEditor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProposalTypeOption, setSelectedProposalTypeOption] = useState(
    radioCardData[0].label
  );
  const handleTitleChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setDescription(e.target.value);
  };

  return (
    <Box width={"full"}>
      <Heading
        size={"md"}
        color="fg.emphasized"
        fontWeight="medium"
        width={"full"}
        py={"4"}
      >
        Write your proposal
      </Heading>
      <RadioCardGroup
        defaultValue={radioCardData[0].label}
        onChange={setSelectedProposalTypeOption}
      >
        {radioCardData.map((option) => (
          <RadioCard
            key={option.label}
            value={option.label}
            borderWidth="1px"
            borderTopWidth={"2px"}
            borderRadius="xl"
            borderColor={option.borderColor}
            borderBlockStartColor={option.borderColor}
            p={4}
            icon={option.icon}
          >
            <Text color="fg.emphasized" fontWeight="medium" fontSize="sm">
              {option.label}
            </Text>
            <Text color="fg.muted" fontSize="sm" m={"2"}>
              {option.description}
            </Text>
          </RadioCard>
        ))}
      </RadioCardGroup>
      {selectedProposalTypeOption === "Product propose" && (
        <ProductProposeForm />
      )}
      {selectedProposalTypeOption === "General propose" && (
        <GeneralProposeForm />
      )}
    </Box>
  );
};
