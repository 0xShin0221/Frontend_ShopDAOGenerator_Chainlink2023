import { memo } from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
} from "@chakra-ui/react";

export const ProposalCreatePreview = () => {
  return (
    <Box width={"full"}>
      <Heading
        size={"md"}
        color="fg.emphasized"
        fontWeight="medium"
        width={"full"}
      >
        Preview your proposal
      </Heading>
      {/* <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We will never share your email.</FormHelperText>
      </FormControl> */}
    </Box>
  );
};
