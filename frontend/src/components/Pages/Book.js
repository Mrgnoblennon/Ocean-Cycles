import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';

import RentalBikeCard from '../Card/RentalBikeCard';

const Book = ({ pageTitle}) => {
  return (
    <div>
      <SubHeader pageTitle={"Book Now"}/>
      <Box bg="green.200" width={"100%"} minHeight={800}>
        
        <Flex justifyContent={"center"}>
          <RentalBikeCard/>
        </Flex> 

      </Box>
    </div>
  );
};

export default Book;
