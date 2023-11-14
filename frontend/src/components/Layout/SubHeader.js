import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion'

const SubHeader = ({ pageTitle }) => {
  return (
    <Box bg="gray.600" color="white" height={100} mb={100}>

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay : 0.5}}
      >
        <Flex flexDirection={"column"} alignItems={"center"} >
        <Text fontSize={"3xl"} mt={6}>
          {pageTitle}
        </Text>
        </Flex>   
      </motion.div> 

    </Box>
  );
};

export default SubHeader;
