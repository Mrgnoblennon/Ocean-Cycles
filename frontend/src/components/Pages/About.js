import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';

const About = ( { pageTitle }) => {

  return (

    <div>
      <SubHeader pageTitle={"Get to Know Us"}/>
      <Box bg="green.200" width={"100%"} minHeight={800}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          About Us Page
        </Text>
      </Box>
    </div>
  );
};

export default About;
