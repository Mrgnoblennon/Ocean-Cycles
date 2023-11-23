import React from 'react';
import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import SubHeader from '../Layout/SubHeader';
import Carousel from '../Animation/Carousel';

const images = [
  'https://framerusercontent.com/images/8tL9Ugx1oNnZz0n5DhdCUMZa88.jpg?scale-down-to=512',
  'https://framerusercontent.com/images/cXOVRvtKBz4ycf04v44oZbVFpU.jpg?scale-down-to=512',
  'https://framerusercontent.com/images/Eg5cXFrMatm4lGzj0KpJTnnTp0.jpg?scale-down-to=512',
  // Add more image URLs as needed
];

const About = ( { pageTitle }) => {

  return (

    <div>
      <SubHeader pageTitle={"Get to Know Us"}/>

      
      <Flex width={"100%"} minHeight={800} p={70} direction={"column"} align={"center"}>
        
        {/* Welcome Box */}
        <Flex align={"center"} justifyContent={"center"} mb={100}>

          <Text fontSize={"2xl"} width={900} mr={400}>
            Welcome to Ocean Cycles, your premier destination for eBike rentals in the 
            vibrant heart of Fremantle, Perth! Nestled in this historic and lively community, 
            we are passionate about providing a unique and eco-friendly way to explore the 
            beauty of Perth and its surroundings.
          </Text>

          <Carousel images={images} intervalDuration={8000} imageSize={250} /> 
          
        </Flex>

        {/* Our Mission Box */}
        <Flex align={"center"} mb={100}>

          <Text fontSize={"2xl"} width={900} mr={400}>

          <Heading mb={10}>
            Our Mission
          </Heading>
           
          At Ocean Cycles, our mission is to enhance your experience of Fremantle 
          by offering convenient, sustainable, and exciting eBike rentals. We believe 
          in the power of green transportation to not only explore the city but also 
          contribute to a cleaner and greener environment.

          </Text>
          
          <Carousel images={images} intervalDuration={8000} imageSize={250}/> 
        </Flex>

        {/* Discover Freo box */}
        <Flex align={"center"}>

          <Text fontSize={"2xl"} width={900} mr={400}>

          <Heading mb={10}>
            Discover Fremantle on Two Wheels
          </Heading>
           
          Fremantle is not just a place; it's an experience waiting to be discovered. 
          Our eBikes give you the freedom to explore its rich history, stunning 
          architecture, and breathtaking coastal views at your own pace.

          </Text>
          
          <Carousel images={images} intervalDuration={8000} imageSize={250}/> 
        </Flex>

        {/*  */}
        <Text></Text>

      </Flex>
    </div>
  );
};

export default About;

<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="18.19999999999999" role="progressbar" class="css-6f2xij" style="width: 18.2%;"></div>