import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMoreVertical,
} from "react-icons/fi";

interface Props {
  label: string;
  value: string;
  delta: {
    value: string;
    isUpwardsTrend: boolean;
  };
  link?: string;
}
export const Stat = (props: Props) => {
  const { label, value, delta, link, ...boxProps } = props;
  return (
    <Box borderRadius="lg" boxShadow="sm" {...boxProps}>
      <Box px={{ base: "4", md: "8" }} py={{ base: "6", md: "10" }}>
        <Stack>
          <HStack justify="space-between">
            <Text fontSize="lg" color="muted">
              {label}
            </Text>
            {/* <Icon as={FiMoreVertical} boxSize="6" color="muted" /> */}
          </HStack>
          <HStack justify="space-between">
            <Heading size={{ base: "lg", md: "xl" }}>{value}</Heading>
            <Badge
              variant="subtle"
              colorScheme={delta.isUpwardsTrend ? "green" : "red"}
            >
              <HStack spacing="1">
                <Icon
                  as={delta.isUpwardsTrend ? FiArrowUpRight : FiArrowDownRight}
                  boxSize="6"
                />
                <Text fontSize="md">{delta.value}</Text>
              </HStack>
            </Badge>
          </HStack>
        </Stack>
      </Box>
      <Divider />
      <Box px={{ base: "4", md: "8" }} py="4">
        <Button
          variant="link"
          colorScheme="purple"
          size="sm"
          onClick={() => {
            if (props.link) window.location.href = props.link;
          }}
        >
          Learn more
        </Button>
      </Box>
    </Box>
  );
};
