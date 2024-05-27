import { Box, Heading, Text, Image } from "@chakra-ui/react";

const ArticleCard = ({ title, summary, imageUrl }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
      <Image src={imageUrl} alt={title} />
      <Box p={4}>
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text>{summary}</Text>
      </Box>
    </Box>
  );
};

export default ArticleCard;