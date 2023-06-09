import {
  Button,
  Center,
  CenterProps,
  HStack,
  Icon,
  Square,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FiUploadCloud } from "react-icons/fi";

export const Dropzone = (props: CenterProps) => (
  <Center
    borderWidth="1px"
    borderRadius="lg"
    px="6"
    py="4"
    bg={useColorModeValue("white", "gray.800")}
    {...props}
  >
    <VStack spacing="3">
      <Square size="10" bg="bg.subtle" borderRadius="lg">
        <Icon as={FiUploadCloud} boxSize="5" color="fg.muted" />
      </Square>
      <VStack spacing="1">
        <HStack spacing="1" whiteSpace="nowrap">
          <Button variant="text" colorScheme="purple" size="sm">
            Click to upload
          </Button>
          <Text fontSize="sm" color="fg.muted">
            or drag and drop
          </Text>
        </HStack>
        <Text fontSize="xs" color="fg.muted">
          PNG, JPG or GIF up to 2MB
        </Text>
      </VStack>
    </VStack>
  </Center>
);
