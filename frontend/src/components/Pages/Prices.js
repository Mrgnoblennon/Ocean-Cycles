import React from 'react';
import { Box, Text, Heading, Link, Image, Flex, Spacer } from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';

import ContactInfo from '../Layout/ContactInfo'

const Prices = () => {
  return (
    <div>
      <SubHeader pageTitle={"Prices"}/>
      <Box width={"100%"} minHeight={800} px={{base: 30 , md: 200}}>
        
        <Box mb={20} width={{base: 300, md: 500}}>
          <Heading fontSize={{base: "lg", md: "3xl"}} fontWeight={"medium"} mb={4}>E-Bikes Short & Long Term Hire</Heading>
          <Text fontSize={{base: "sm", md: "xl"}} color={"gray.300"} mb={4}>See below our fees including helmet, pannier bag, lock</Text>
          <Heading fontSize={{base: "md", md: "2xl"}} fontWeight={"light"} mb={4}>Day: $80 (from 1st November 2022)</Heading>
          <Link fontSize={{base: "sm", md: "xl"}} color={"green.300"} href="/contact">Contact us for longer terms</Link>
        </Box>

        <Flex justify={"center"} direction={{base: "column", md: "row"}} mb={20}>
          <Image height={{base: 250, md: 600}} mb={{base: "50px", md: 0}} src="https://www.oceancycles.com.au/wp-content/uploads/2016/04/file1-1.jpeg"/>
          <Spacer/>
          <Image height={{base: 250, md: 600}} src="https://www.oceancycles.com.au/wp-content/uploads/2016/04/file-1.jpeg"/>
        </Flex>

        <Box width={{base: 200, md: 800}} mr={{base: 0, md: 70}}   mb={{base: "70px", md: 0}}>
          <ContactInfo/>
        </Box>

      </Box>
    </div>
  );
};

export default Prices;
