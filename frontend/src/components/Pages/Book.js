import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';

const Book = ({ pageTitle}) => {
  return (
    <div>
      <SubHeader pageTitle={"Book Now"}/>
      <Box bg="green.200" width={"100%"} minHeight={800}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Booking Page
        </Text>
      </Box>
    </div>
  );
};

export default Book;
