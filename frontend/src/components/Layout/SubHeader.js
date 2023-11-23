import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion'

const SubHeader = ({ pageTitle }) => {
  return (
    <Box bg="gray.600" color="white" height={{base: 70, md: 100}} mb={{base: 70, md: 100}} width={"100%"}>

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay : 0.5}}
      >
        <Flex flexDirection={"column"} alignItems={"center"} >
        <Text fontSize={{base: "lg", md: "3xl"}} mt={6}>
          {pageTitle}
        </Text>
        </Flex>   
      </motion.div> 

    </Box>
  );
};

export default SubHeader;
