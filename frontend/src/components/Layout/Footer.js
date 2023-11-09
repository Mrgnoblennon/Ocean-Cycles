import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.200" p={4} mt={200}>
      <Text textAlign="center">
        &copy; {new Date().getFullYear()} Ocean Cycles. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
