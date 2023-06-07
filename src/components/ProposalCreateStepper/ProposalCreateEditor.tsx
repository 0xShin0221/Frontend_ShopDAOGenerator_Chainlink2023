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
      <RadioCardGroup defaultValue="one">
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
      <Text fontWeight={"semibold"} my="8px">
        Title
      </Text>
      <Input
        value={title}
        onChange={handleTitleChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />

      <Text fontWeight={"semibold"} my="8px">
        Description [todo:to rich editor like TinyMCE ]
      </Text>
      <Textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
      <FormControl id="file" py={4}>
        <FormLabel fontWeight={"semibold"}>Drop proposal image</FormLabel>
        <Dropzone />
      </FormControl>

      <Stack
        direction={{ base: "column", sm: "row" }}
        justify={{ base: "end" }}
      >
        <ButtonGroup>
          <Button m={"4"}>Back</Button>

          <Button colorScheme="brandSubColor" m={"4"}>
            Continue
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};
