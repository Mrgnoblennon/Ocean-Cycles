import React from 'react';
import { Box, Text, Heading, Image, Flex } from '@chakra-ui/react';

// Animation

import Slider from '../Animation/Slider';

const Home = () => {
  return (

    <div>

    <Slider height={{base: 700}}/>

    <Box width={"100%"} minHeight={800} px={{base: 30 , md: 100}}>
      
      <Flex direction={{base: "column", md: "row"}} alignItems={"center"} justifyContent={"center"} mb={150}>

        <Image width={{base: 400 ,md: 700}} height={{base: 200, md: 400}} mr={{md: 150}} mb={{base: 10}} src='https://www.destinationperth.com.au/sites/default/files/styles/card/public/media-library/images/twa_highst_fremantle_2020planner_05.1119.jpg?itok=5z6VKick'/>

        <Box>

          <Heading fontSize={{base: "xl", md: "4xl"}} mb={10} >Looking to go around Freo?</Heading>

          <Text fontSize={{base: "md", md: "2xl"}} width={{md: 700}}>Embracing the eco-friendly trend, renting an electric bike from a Fremantle shop not only saves you time 
                but also lets you effortlessly explore the town's historic sites, beautiful beaches and trendy cafes, 
                all while enjoying the freedom of two wheels.
          </Text>

        </Box>

      </Flex>

      <Flex direction={{base: "column" ,md: "row-reverse"}} alignItems={"center"} justifyContent={"center"}>

        <Image width={{base: 400 ,md: 700}} height={{base: 200, md: 400}} ml={{md: 150}} mb={{base: 10}} src='https://cms-cdn.travellink.com.au/volumes/sealink/images/Rottnest-Island/Blogs/_md_3x2/631953/biking-on-rottnest-island-m.webp?v=1686540912'/>

        <Box>

          <Heading fontSize={{base: "xl", md: "4xl"}} mb={10}>We have all your biking needs</Heading>

          <Text fontSize={{base: "md", md: "2xl"}} width={{md: 700}}>Having the right equipment tailored to your needs ensures a seemless and enjoyable experience,
                wheteher it's exploring new places, pursuing hobbies or tackling specific tasks with utmost 
                efficiency and comfort.
          </Text>
        </Box>
      </Flex>

    </Box>

    </div>
  );
};

export default Home;
