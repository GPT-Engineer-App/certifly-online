import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
          Online Training
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/about" mr={4}>
          About
        </Link>
        <Link as={RouterLink} to="/courses" mr={4}>
          Courses
        </Link>
        <Link as={RouterLink} to="/contact">
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
