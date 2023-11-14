import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';

import Carousel from '../Animation/Carousel';

const Book = ({ pageTitle}) => {
  return (
    <div>
      <SubHeader pageTitle={"Book Now"}/>
      <Box bg="green.200" width={"100%"} minHeight={800}>
        
        <Box width={300} height={1000} bg={"yellow.200"} >

        </Box>

      </Box>
    </div>
  );
};

export default Book;
