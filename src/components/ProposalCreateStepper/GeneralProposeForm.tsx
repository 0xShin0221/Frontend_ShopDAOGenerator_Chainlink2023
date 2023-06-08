import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Dropzone } from "../Dropzone";
import { useState } from "react";

export const GeneralProposeForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <Text fontWeight={"semibold"} my="8px">
        Title
      </Text>
      <Input
        id="title"
        value={formState.title}
        onChange={handleChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />

      <Text fontWeight={"semibold"} my="8px">
        Description [todo:to rich editor like TinyMCE ]
      </Text>
      <Textarea
        id="description"
        value={formState.description}
        onChange={handleChange}
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
    </>
  );
};
