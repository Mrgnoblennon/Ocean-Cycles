import React from 'react';
import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import SubHeader from '../Layout/SubHeader';
import Carousel from '../Animation/Carousel';

const images1 = [
  'https://static.wixstatic.com/media/3938b5_1e503550dc0f4f869627f1776ecac6f6~mv2.jpg/v1/fill/w_2500,h_2363,al_c/3938b5_1e503550dc0f4f869627f1776ecac6f6~mv2.jpg',
  'https://twa.imgix.net/https%3A%2F%2Fassets.atdw-online.com.au%2Fimages%2Fc332cd36578f6de7f6d7d4c88366a883.jpeg%3Frect%3D0%2C133%2C2449%2C1378%26rot%3D360?auto=format&h=405&w=720&fit=crop&crop=edges&q=75&s=82efd4c531a3b907f48c8eca134a5026',
  'https://www.fremantleports.com.au/images/default-source/news/0062-fremantle-ports---1000.jpg?sfvrsn=457d3f22_0',
  // Add more image URLs as needed
];

const images2 = [
  'https://images.unsplash.com/photo-1620802051782-725fa33db067?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWJpa2V8ZW58MHx8MHx8fDA%3D',
  'https://wikiaustralia.com/wp-content/uploads/2011/07/shutterstock_1874213947.jpg',
  'https://media.licdn.com/dms/image/C561BAQEvwBunOekw-Q/company-background_10000/0/1649225652520/city_of_fremantle_cover?e=2147483647&v=beta&t=JkbjokN3IlLJ8UwIwwHAKo3Bo5PLvHag9-HXgAvaf8U'
]

const images3 = [
  'https://beyondreticulation.com.au/wp-content/uploads/2021/09/reticulation-repairs-near-Fremantle.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiC9Wj6i3iapsDbD0xA0Z8Gxv9xptP1XWt5A&usqp=CAU',
  'https://images.luxuryescapes.com/q_auto:good/gb7x5d2d3w2hnujught'
]

const About = ( { pageTitle }) => {

  return (

    <div>
      <SubHeader pageTitle={"Get to Know Us"}/>

      
      <Box width={"100%"} minHeight={800} px={{base: 30 , md: 100}}>
        
        {/* Welcome Box */}
        <Flex align={"center"} justifyContent={{md: "center"}} direction={{base: "column", md: "row"}} mb={100}>

          <Text fontSize={{base: "md", md: "2xl"}} width={{base: 300, md: 900}} mr={{md: 400}} mb={{base: 50, md: 0}}>

            <Heading fontSize={{base: "xl", md: "4xl"}} mb={10}>
              Welcome
            </Heading>

            Welcome to Ocean Cycles, your premier destination for eBike rentals in the 
            vibrant heart of Fremantle, Perth! Nestled in this historic and lively community, 
            we are passionate about providing a unique and eco-friendly way to explore the 
            beauty of Perth and its surroundings.
          </Text>

          <Carousel images={images1} intervalDuration={8000} imageSize={{base: 200 ,md: 250}}/> 
          
        </Flex>

        {/* Our Mission Box */}
        <Flex align={"center"} justifyContent={{md: "center"}} direction={{base: "column", md: "row"}} mb={100}>

          <Text fontSize={{base: "md", md: "2xl"}} width={{base: 300, md: 900}} mr={{md: 400}} mb={{base: 50, md: 0}}>

          <Heading fontSize={{base: "xl", md: "4xl"}} mb={10}>
            Our Mission
          </Heading>
           
          At Ocean Cycles, our mission is to enhance your experience of Fremantle 
          by offering convenient, sustainable, and exciting eBike rentals. We believe 
          in the power of green transportation to not only explore the city but also 
          contribute to a cleaner and greener environment.

          </Text>
          
          <Carousel images={images2} intervalDuration={8000} imageSize={{base: 200 ,md: 250}}/> 
        </Flex>

        {/* Discover Freo box */}
        <Flex align={"center"} justifyContent={{md: "center"}} direction={{base: "column", md: "row"}}>

          <Text fontSize={{base: "md", md: "2xl"}} width={{base: 300, md: 900}} mr={{md: 400}} mb={{base: 50, md: 0}}>

          <Heading fontSize={{base: "xl", md: "4xl"}} mb={10}>
            Discover Fremantle on Two Wheels
          </Heading>
           
          Fremantle is not just a place; it's an experience waiting to be discovered. 
          Our eBikes give you the freedom to explore its rich history, stunning 
          architecture, and breathtaking coastal views at your own pace.

          </Text>
          
          <Carousel images={images3} intervalDuration={8000} imageSize={{base: 200 ,md: 250}}/> 
        </Flex>


      </Box>
    </div>
  );
};

export default About;