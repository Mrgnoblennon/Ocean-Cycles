import React from 'react';
import { Box, Text, Heading, Flex} from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';
import ContactInfo from '../Layout/ContactInfo';

import ContactForm from '../Form/ContactForm';



const Contact = ({ pageTitle }) => {
  return (
    <div>
      <SubHeader pageTitle={"Contact Us"}/>

      <Flex width={"100%"} minHeight={800} px={{base: 30 , md: 100}} justify={"center"} direction={{base: "column", md: "row"}}>

        {/* Overall size */}
        <Box width={{base: 200, md: 800}} mr={{base: 0, md: 70}}   mb={{base: "70px", md: 0}}>
          <ContactInfo/>
        </Box>
        
        <Box width={{base: 300, md: 800}} minHeight={300}>
          <ContactForm/>
        </Box>

        

      </Flex>
    </div>
  );
};

export default Contact;
