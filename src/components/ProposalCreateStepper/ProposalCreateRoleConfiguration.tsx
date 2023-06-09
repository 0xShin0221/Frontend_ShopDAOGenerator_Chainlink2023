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
  Stack,
  Button,
} from "@chakra-ui/react";
export const ProposalCreateRoleConfiguration = () => {
  return (
    <Box width={"full"} p={4}>
      <Heading
        size={"md"}
        color="fg.emphasized"
        fontWeight="medium"
        width={"full"}
      >
        Check the proposal right
      </Heading>

      <Stack
        direction={{ base: "column", sm: "row" }}
        justify={{ base: "end" }}
      >
        <Button colorScheme="brandSubColor" m={"4"}>
          Continue
        </Button>
      </Stack>
    </Box>
  );
};
