import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';

const EBikes = ({ pageTitle }) => {
  return (
    <div>
      <SubHeader pageTitle="Browse our Bikes"/>
      <Box bg="green.200" width={"100%"} minHeight={800}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          EBikes Page
        </Text>
      </Box>
    </div>
  );
};

export default EBikes;
