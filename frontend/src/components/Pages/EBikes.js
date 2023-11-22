import React from 'react';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';

import EBikeCard from '../Card/EBikeCard';

import ContactInfo from '../Layout/ContactInfo'

const EBikes = ({ pageTitle }) => {
  return (
    <div>
      <SubHeader pageTitle="Browse our Bikes"/>
      <Box width={"100%"} minHeight={1000} px={100}>

        <Flex mb={100}>

          <EBikeCard
           imageSrc="https://www.oceancycles.com.au/wp-content/uploads/2020/11/tour-up-1-1024x649.jpg"
           pedalAssistance="5 levels"
           gears="7x3 speeds"
           brakes="Disc"
           suspension="Front adjustable forks"
           charge="Single pin and USB port"
           motor="36V250W, rear"
           battery="36V10AH Hidden battery"
           maxSpeed="25km/h"
           tyres="26”-(27,5”–29”)"
           netWeight="21-(22)kg"
           maxLoad="150kg"
           range="60-90 Kms"/>

          <Spacer/>

          <EBikeCard
           imageSrc="https://www.oceancycles.com.au/wp-content/uploads/2020/11/suv-up-1024x649.jpg"
           pedalAssistance="5 levels"
           gears="7x3 speeds"
           brakes="Disc"
           suspension="Front adjustable forks"
           charge="Single pin and USB port"
           motor="36V250W, rear"
           battery="36V10AH Hidden battery"
           maxSpeed="25km/h"
           tyres="26”-(28”)"
           netWeight="21–(22)kg"
           maxLoad="150kg"
           range="60-90 Kms"/>

          <Spacer/>
          
          <EBikeCard
           imageSrc="https://www.oceancycles.com.au/wp-content/uploads/2020/11/hipster-1-1024x649.jpg"
           pedalAssistance="5 levels"
           gears="7 speeds"
           brakes="Disc"
           suspension="Front adjustable forks"
           charge="Single pin and USB port"
           motor="36V250W, rear"
           battery="36V8AH Hidden battery"
           maxSpeed="25km/h"
           tyres="26”-(28”)"
           netWeight="15kg"
           maxLoad="120kg"
           range="60-80 Kms"/>
        </Flex>

        <Box width={800} minHeight={300}>
          <ContactInfo/>
        </Box>

      </Box>
    </div>
  );
};

export default EBikes;
