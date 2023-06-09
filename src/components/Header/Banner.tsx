import {
  Box,
  Button,
  CloseButton,
  Icon,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import router from "next/router";
import { FiInfo } from "react-icons/fi";

export const Banner = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box as="section">
      <Box bg="blackAlpha.100" boxShadow="sm">
        <CloseButton
          display={{ sm: "none" }}
          position="absolute"
          right="2"
          top="2"
        />
        <Stack
          direction={{ base: "column", sm: "row" }}
          justify="center"
          spacing={{ base: "3", md: "2" }}
        >
          <Stack
            direction={{ base: "row", md: "row" }}
            justify="center"
            align={{ base: "center", md: "center" }}
          >
            {!isMobile && (
              <Square size="12" bg="bg.subtle" borderRadius="md">
                <Icon as={FiInfo} boxSize="6" />
              </Square>
            )}

            <Text alignContent={"center"} fontWeight="medium">
              Currently in the building status 🚀
            </Text>
          </Stack>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={{ base: "3", sm: "2" }}
            align={{ base: "stretch", sm: "center" }}
          >
            <Button
              variant="primary"
              width="full"
              onClick={() => {
                router.push("https://devpost.com/software/shopdao-generator");
              }}
            >
              Read more this project
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
