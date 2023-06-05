import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { Stat } from "./Stat";
import { AppStatsData } from "@/mocks/AppStats";

export const AppStats = () => (
  <Box as="section" py={{ base: "4", md: "8" }} px={{ base: "6", md: "12" }}>
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "8" }}>
      {AppStatsData.map((stat, id, link) => (
        <Stat key={id} {...stat} link={stat.link} />
      ))}
    </SimpleGrid>
  </Box>
);
