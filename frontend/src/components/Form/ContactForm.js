import React from 'react';
import { Box, Text, Heading, VStack, HStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ContactForm = () => {
  return (
    <div>
      <Heading mb={8} color={"blue.300"}>Send Us a Message</Heading>

      <Text fontSize={"lg"} mb={8}>Tell us about your need and we will get back to you as soon as possible!</Text>

      <Box>
        <HStack spacing={4} mb={35}>
          <FormControl id="name">
            <FormLabel fontSize={"lg"}>Name:</FormLabel>
            <Input type="text" placeholder="Your Name" />
          </FormControl>

          <FormControl id="email">
            <FormLabel fontSize={"lg"}>Email:</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>

        </HStack>

        <HStack spacing={4} mb={55}>
          <FormControl id="phone">
            <FormLabel fontSize={"lg"}>Phone Number:</FormLabel>
            <Input type="tel" placeholder="Your Phone Number" />
          </FormControl>

          <FormControl id="postcode">
            <FormLabel fontSize={"lg"}>Post Code:</FormLabel>
            <Input width={150} type="text" placeholder="Your Post Code" />
          </FormControl>

        </HStack>

        <FormControl mb={50} id="message">
          <FormLabel fontSize={"lg"}>Message:</FormLabel>
          <Textarea height={250} placeholder="Your Message" />
        </FormControl>

          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
      </Box>
    </div>

  );
};

export default ContactForm;
