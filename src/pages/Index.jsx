import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Grid, Image, Container, Flex, Icon } from "@chakra-ui/react";
import { FaLaptopCode, FaCertificate, FaUserGraduate } from "react-icons/fa";
import Navigation from "../components/Navigation";

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTE5MTQyOTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Data Science Essentials",
    description: "Dive into the world of data science and machine learning.",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZXxlbnwwfHx8fDE3MTE5MTQyOTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Cloud Computing Certification",
    description: "Master cloud computing concepts and get certified.",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3MTE5MTQyOTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <Box>
      <Navigation />
      <Box bg="blue.500" color="white" py={16}>
        <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB0cmFpbmluZ3xlbnwwfHx8fDE3MTE5MTQyOTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Online Training" objectFit="cover" width="100%" height={400} />
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            ERNEST LINCOLN GLOBAL INSTITUTE
          </Heading>
          <Text fontSize="xl" mb={8}>
            Unlock your potential with our professional certification courses.
          </Text>
          <Button colorScheme="white" size="lg" onClick={() => setSelectedCourse(null)}>
            Explore Courses
          </Button>
        </Container>
      </Box>

      <Container maxW="container.lg" py={16}>
        {selectedCourse ? (
          <Box>
            <Button leftIcon={<FaLaptopCode />} variant="link" onClick={() => setSelectedCourse(null)} mb={8}>
              Back to Courses
            </Button>
            <Heading as="h2" size="xl" mb={4}>
              {selectedCourse.title}
            </Heading>
            <Image src={selectedCourse.image} alt={selectedCourse.title} mb={8} />
            <Text fontSize="lg" mb={8}>
              {selectedCourse.description}
            </Text>
            <Button colorScheme="blue" size="lg">
              Enroll Now
            </Button>
          </Box>
        ) : (
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            {courses.map((course) => (
              <Box key={course.id} borderWidth={1} borderRadius="lg" p={6} cursor="pointer" onClick={() => setSelectedCourse(course)}>
                <Image src={course.image} alt={course.title} mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  {course.title}
                </Heading>
                <Text>{course.description}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </Container>

      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Why Choose Us?
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <Flex direction="column" align="center">
              <Icon as={FaLaptopCode} boxSize={12} mb={4} />
              <Text fontWeight="bold">Hands-on Learning</Text>
            </Flex>
            <Flex direction="column" align="center">
              <Icon as={FaCertificate} boxSize={12} mb={4} />
              <Text fontWeight="bold">Industry-Recognized Certifications</Text>
            </Flex>
            <Flex direction="column" align="center">
              <Icon as={FaUserGraduate} boxSize={12} mb={4} />
              <Text fontWeight="bold">Expert Instructors</Text>
            </Flex>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
