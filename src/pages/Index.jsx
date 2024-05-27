import { Box, Container, Flex, VStack, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";

const Index = () => {
  return (
    <Box bg="background">
      <Navbar />
      <Container maxW="container.xl" py={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          <Box flex="3">
            <Heading as="h2" size="xl" mb={4}>
              Featured Articles
            </Heading>
            <ArticleCard
              title="Breaking News: Market Hits Record High"
              summary="The stock market reached an all-time high today, driven by strong earnings reports and economic optimism."
              imageUrl="https://via.placeholder.com/800x400"
            />
            <ArticleCard
              title="Tech Giants Release New Gadgets"
              summary="Leading technology companies have unveiled their latest products, promising to revolutionize the industry."
              imageUrl="https://via.placeholder.com/800x400"
            />
          </Box>
          <Box flex="1" ml={{ md: 8 }}>
            <Heading as="h3" size="lg" mb={4}>
              Trending News
            </Heading>
            <VStack spacing={4}>
              <Text>Global markets react to new economic policies.</Text>
              <Text>Experts discuss the future of remote work.</Text>
              <Text>New advancements in renewable energy technology.</Text>
            </VStack>
            <Heading as="h3" size="lg" mt={8} mb={4}>
              Market Data
            </Heading>
            <VStack spacing={4}>
              <Text>Dow Jones: 34,000 (+0.5%)</Text>
              <Text>NASDAQ: 14,000 (+0.8%)</Text>
              <Text>S&P 500: 4,200 (+0.6%)</Text>
            </VStack>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;