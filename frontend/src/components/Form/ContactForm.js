import React from 'react';
import { Box, Text, Heading, VStack, HStack, FormControl, FormLabel, Input, Textarea, Button, useBreakpointValue } from '@chakra-ui/react';

const ContactForm = () => {

  const isMd = useBreakpointValue({ base: false, md: true });
  const isBase = useBreakpointValue({ base: true, md: false });

  return (
    <div>
      <Heading fontSize={{base: "lg", md: "3xl"}} mb={8} color={"blue.300"}>Send Us a Message</Heading>

      <Text fontSize={{base: "xs", md: "lg"}} mb={8}>Tell us about your need and we will get back to you as soon as possible!</Text>

      <Box>
        {isMd && (
          <HStack spacing={4} mb={35}>
            <FormControl id="name">
              <FormLabel fontSize={"lg"}>Name:</FormLabel>
              <Input type="text" placeholder="Your Name" fontSize={"md"}/>
            </FormControl>
  
            <FormControl id="email  ">
              <FormLabel fontSize={{base: "xs", md: "lg"}}>Email:</FormLabel>
              <Input type="email" placeholder="Your Email" fontSize={"md"}/>
            </FormControl>
  
          </HStack>
        )}

        {isMd && (
          <HStack spacing={4} mb={55}>
            <FormControl id="phone">
              <FormLabel fontSize={"lg"}>Phone Number:</FormLabel>
              <Input type="tel" placeholder="Your Phone Number" fontSize={"md"}/>
            </FormControl>
  
            <FormControl id="postcode">
              <FormLabel fontSize={"lg"}>Post Code:</FormLabel>
              <Input width={150} type="text" placeholder="Your Post Code" fontSize={"md"}/>
            </FormControl>
  
          </HStack>
        )}

        {isBase && (
        <FormControl id="name" mb={30}>
          <FormLabel fontSize={"xs"}>Name:</FormLabel>
          <Input type="text" placeholder="Your Name" fontSize={"xs"}/>
        </FormControl>
        )}

        {isBase && (
        <FormControl id="email" mb={30}>
          <FormLabel fontSize={"xs"}>Email:</FormLabel>
          <Input type="email" placeholder="Your Email" fontSize={"xs"}/>
        </FormControl>
        )}

        {isBase && (
        <FormControl id="phone" mb={30}>
          <FormLabel fontSize={"xs"}>Phone Number:</FormLabel>
          <Input type="tel" placeholder="Your Phone Number" fontSize={"xs"}/>
        </FormControl>
        )}

        {isBase && (
        <FormControl id="postcode" mb={30}>
          <FormLabel fontSize={"xs"}>Post Code:</FormLabel>
          <Input width={150} type="text" placeholder="Your Post Code" fontSize={"xs"}/>
        </FormControl>
        )}

        
        
        <FormControl mb={50} id="message">
          <FormLabel fontSize={{base: "xs", md: "lg"}}>Message:</FormLabel>
          <Textarea height={250} placeholder="Your Message" fontSize={{base: "xs", md: "md"}}/>
        </FormControl>

          <Button size={{base: "xs", md: "md"}} colorScheme="teal" type="submit">
            Submit
          </Button>

      </Box>
    </div>

  );
};

export default ContactForm;
