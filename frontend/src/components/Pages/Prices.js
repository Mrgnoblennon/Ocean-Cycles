import React from 'react';
import { Box, Text, Heading, Link, Image, Flex, Spacer } from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';

import ContactInfo from '../Layout/ContactInfo'

const Prices = () => {
  return (
    <div>
      <SubHeader pageTitle={"Prices"}/>
      <Box width={"100%"} minHeight={800} px={200}>
        
        <Box mb={20}>
          <Heading fontSize={"3xl"} fontWeight={"medium"} mb={4}>E-Bikes Short & Long Term Hire</Heading>
          <Text fontSize={"xl"} color={"gray.300"} mb={4}>See below our fees including helmet, pannier bag, lock</Text>
          <Heading fontSize={"2xl"} fontWeight={"light"} mb={4}>Day: $80 (from 1st November 2022)</Heading>
          <Link fontSize={"xl"} color={"green.300"} href="/contact">Contact us for longer terms</Link>
        </Box>

        <Flex justify={"center"} mb={20}>
          <Image height={600} src="https://www.oceancycles.com.au/wp-content/uploads/2016/04/file1-1.jpeg"/>
          <Spacer/>
          <Image height={600} src="https://www.oceancycles.com.au/wp-content/uploads/2016/04/file-1.jpeg"/>
        </Flex>

        <Box width={800} minHeight={300}>
          <ContactInfo/>
        </Box>

      </Box>
    </div>
  );
};

export default Prices;
