import React from 'react';
import { Box, Text, Image, Heading } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import SubHeader from '../Layout/SubHeader';

const About = ( { pageTitle }) => {

  return (

    <div>
      <SubHeader pageTitle={"Get to Know Us"}/>

      <Box bg="green.200" width={"100%"} minHeight={800} p={70}>
        
        <motion.div
        initial={{ opacity: 0, scale : 0.5 }}
        animate={{ opacity: 1, scale : 1}}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >

          <Box bg={"purple.400"} borderRadius={20} width={300} height={300}/>
          

        </motion.div>

        <Image/>
        <Heading>Heading</Heading>
        <Text>Text</Text>
      </Box>
    </div>
  );
};

export default About;
