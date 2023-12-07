import React from 'react';
import { Box, HStack, Text, FormControl, FormLabel, Input} from '@chakra-ui/react'

const CustomerForm = () => {
  return(
    <Box  p={20} bg={"purple.300"} width={800} height={1000}>
        
      <FormControl mb={5} id="firstName">
        <FormLabel fontSize={"lg"}>First Name:</FormLabel>
        <Input type="text" placeholder="Your first name"/>
      </FormControl>

      <FormControl mb={5} id="lastName">
        <FormLabel fontSize={"lg"}>Last Name:</FormLabel>
        <Input type="text" placeholder="Your last name"/>
      </FormControl>

      <FormControl mb={5} id="mobileNumber">
        <FormLabel fontSize={"lg"}>Mobile Number:</FormLabel>
        <Input type="text" placeholder="Your mobile number"/>
      </FormControl>

      <FormControl mb={5} id="email">
        <FormLabel fontSize={"lg"}>Email:</FormLabel>
        <Input type="text" placeholder="Your email"/>
      </FormControl>

      <FormControl mb={5} id="address">
        <FormLabel fontSize={"lg"}>Address:</FormLabel>
        <Input type="text" placeholder="your address"/>
      </FormControl>

      <FormControl mb={5} id="dateOfBirth">
        <FormLabel fontSize={"lg"}>Date of Birth:</FormLabel>
        <Input type="date" placeholder="Your date of birth"/>
      </FormControl>

      <FormControl mb={5} id="emergencyContact">
        <FormLabel fontSize={"lg"}>Emergency Contact:</FormLabel>
        <Input type="text" placeholder="Your emergency contact"/>
      </FormControl>

      <FormControl mb={5} id="notes">
        <FormLabel fontSize={"lg"}>Notes:</FormLabel>
        <Input type="text" placeholder="Please add any notes"/>
      </FormControl>

    </Box>
  );
};

export default CustomerForm;