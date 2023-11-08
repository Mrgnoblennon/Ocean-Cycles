import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Heading as="h1" size="xl">
        Ocean Cycles
      </Heading>
    </Box>
  );
};

export default Header;
