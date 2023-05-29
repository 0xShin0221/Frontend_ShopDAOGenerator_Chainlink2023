import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { Stat } from "./Stat";

const stats = [
  {
    label: "Gross Distribution",
    value: "$" + "1,88720",
    delta: { value: "0.1%", isUpwardsTrend: false },
  },
  {
    label: "Total Distribution",
    value: "$" + "71,887",
    delta: { value: "320", isUpwardsTrend: true },
  },
  {
    label: "Total Distributed Accounts",
    value: "5687",
    delta: { value: "23", isUpwardsTrend: true },
  },
];

export const AppStats = () => (
  <Box as="section" py={{ base: "4", md: "8" }} px={{ base: "6", md: "12" }}>
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "8" }}>
      {stats.map((stat, id) => (
        <Stat key={id} {...stat} />
      ))}
    </SimpleGrid>
  </Box>
);
