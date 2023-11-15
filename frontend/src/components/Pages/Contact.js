import React from 'react';
import { Box, Text, Heading, Flex} from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';
import ContactInfo from '../Layout/ContactInfo';

import ContactForm from '../Form/ContactForm';



const Contact = ({ pageTitle }) => {
  return (
    <div>
      <SubHeader pageTitle={"Contact Us"}/>

      <Flex width={"100%"} minHeight={800} p={70} justify={"center"}>

        <Box width={800} minHeight={300}  mr={70}>
          <ContactInfo/>
        </Box>
        
        <Box width={800} minHeight={300}>
          <ContactForm/>
        </Box>

        

      </Flex>
    </div>
  );
};

export default Contact;
