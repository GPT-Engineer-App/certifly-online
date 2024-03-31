import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <Box>
      <Navigation />
      <Container maxW="container.lg" py={16}>
        <Heading as="h1" size="2xl" mb={8}>
          About Us
        </Heading>
        <Text fontSize="lg">We are a leading online training platform dedicated to helping individuals enhance their skills and advance their careers through professional certification courses.</Text>
      </Container>
    </Box>
  );
};

export default About;
