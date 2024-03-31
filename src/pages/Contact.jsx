import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <Box>
      <Navigation />
      <Container maxW="container.lg" py={16}>
        <Heading as="h1" size="2xl" mb={8}>
          Contact Us
        </Heading>
        <Text fontSize="lg">If you have any questions or inquiries, please feel free to reach out to us.</Text>
      </Container>
    </Box>
  );
};

export default Contact;
