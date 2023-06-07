import { memo } from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
export const Contents = () => {
  return (
    <Box width={"full"}>
      <Text color="fg.emphasized" fontWeight="medium" width={"full"}>
        ggggg
      </Text>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We will never share your email.</FormHelperText>
      </FormControl>
    </Box>
  );
};
