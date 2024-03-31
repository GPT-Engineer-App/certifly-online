import React from "react";
import { Box, Heading, Grid, Container } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Courses = () => {
  return (
    <Box>
      <Navigation />
      <Container maxW="container.lg" py={16}>
        <Heading as="h1" size="2xl" mb={8}>
          Our Courses
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {}
        </Grid>
      </Container>
    </Box>
  );
};

export default Courses;
