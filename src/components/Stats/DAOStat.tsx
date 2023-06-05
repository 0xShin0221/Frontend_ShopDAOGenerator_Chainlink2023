import { Box, Progress, Stack, Text } from "@chakra-ui/react";

interface DAOStatProps {
  label: string;
  value: number;
  limit: number;
}

export const DAOStat: React.FC<DAOStatProps> = ({ label, value, limit }) => (
  <Box>
    <Text fontSize="sm" color="muted" mb="2">
      {label}
    </Text>
    <Stack>
      <Text fontSize="2xl" fontWeight="medium" color="emphasized">
        {value}/{limit}
      </Text>
      <Progress
        value={(value / limit) * 100}
        size="sm"
        colorScheme="brandSubColor"
      />
    </Stack>
  </Box>
);
