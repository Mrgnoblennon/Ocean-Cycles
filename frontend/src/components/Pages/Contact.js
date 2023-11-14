import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import SubHeader from '../Layout/SubHeader';

const Contact = ({ pageTitle }) => {
  return (
    <div>
      <SubHeader pageTitle={"Contact Us"}/>
      <Box bg="green.200" width={"100%"} minHeight={800} p={70}>
        
        <Box width={800} minHeight={300} bg={"yellow.200"} >

        </Box>

      </Box>
    </div>
  );
};

export default Contact;
