import {
  Box,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
// import { TotalDistributedAccounts } from "../../mocks/TotalDistributedAccounts";
// import { posts } from "./data";
import { ArticleDatas } from "@/articles";
// import { ContentArticle } from "@/components/ContentArticle";
import { ArticlePropsInterface } from "@/types/Article";
import { ContentArticle } from "./ContentArticle";

export const ArticleLayout = ({ articleNumber }: { articleNumber: number }) => {
  return (
    <Box>
      <Box bg="bg-accent" color="on-accent" backgroundColor={"brand.900"}>
        <Container pt={{ base: "16", md: "24" }} pb={{ base: "32", md: "48" }}>
          <Stack spacing={{ base: "8", md: "10" }} align="center">
            <Stack spacing={{ base: "4", md: "6" }} textAlign="center">
              <Stack spacing="4">
                <Heading size={{ base: "md", md: "lg" }} textColor={"white"}>
                  {ArticleDatas[articleNumber].title}
                </Heading>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container pb={{ base: "16", md: "24" }} mt={{ base: "-16", md: "-24" }}>
        <Stack spacing={{ base: "16", md: "24" }}>
          <Stack spacing={{ base: "12", md: "16" }}>
            <ContentArticle post={ArticleDatas[articleNumber]} isHero />
            {/* 
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={{ base: "12", lg: "8" }}
          >
            {posts.slice(1, 4).map((post) => (
              <TotalDistributedAccounts key={post.id} post={post} />
            ))}
          </SimpleGrid> */}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
