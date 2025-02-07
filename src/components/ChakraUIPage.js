import React from 'react';
import { Button, Container, Heading } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

function ChakraUIPage() {
  return (
    <ChakraProvider>
      <Container>
        <Heading as="h1" size="xl" mb={4}>Chakra UI</Heading>
        <Button colorScheme="teal">Hello Chakra UI</Button>
      </Container>
    </ChakraProvider>
  );
}

export default ChakraUIPage;