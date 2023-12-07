import React, { useState } from 'react';
import { Box, Text, Textarea, Heading, FormControl, FormLabel, Input, Button, HStack} from '@chakra-ui/react'
import { ADD_CUSTOMER } from '../../utils/mutations'
import { useMutation } from '@apollo/client'

const CustomerForm = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    dateOfBirth: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
    },
    emergencyContact:  {
      name: '',
      relationship: '',
      phoneNumber: '',
    },
    notes: '',
  });

  const [addCustomerMutation] = useMutation(ADD_CUSTOMER);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      emergencyContact: {
        ...prevData.emergencyContact,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      // Call your mutation with the form data
      const { data } = await addCustomerMutation({
        variables: { input: formData }, // Adjust this based on your mutation input
      });

      // Optionally, you can handle the response data here

      console.log('Customer added successfully:', data);
    } catch (error) {
      console.error('Error adding customer:', error.message);
    }
  };

  return(
    <Box p={20} borderRadius={30} bg={"white"} width={800} height={1700}>

      <Heading fontSize={"3xl"} mb={8} color={"blue.300"}>Customer Form</Heading>

      <FormControl mb={5} id="firstName">
        <FormLabel fontSize={"lg"}>First Name:</FormLabel>
        <Input
          type="text" 
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Your first name"
        />
      </FormControl>

      <FormControl mb={5} id="lastName">
        <FormLabel fontSize={"lg"}>Last Name:</FormLabel>
        <Input
          type="text" 
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Your last name"
        />
      </FormControl>

      <FormControl mb={5} id="mobileNumber">
        <FormLabel fontSize={"lg"}>Mobile Number:</FormLabel>
        <Input
          type="text" 
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Your mobile number"
        />
      </FormControl>

      <FormControl mb={5} id="email">
        <FormLabel fontSize={"lg"}>Email:</FormLabel>
        <Input
          type="text" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
        />
      </FormControl>

      <FormControl mb={5} id="dateOfBirth">
        <FormLabel fontSize={"lg"}>Date of Birth:</FormLabel>
        <Input
          type="date" 
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          placeholder="Your date of birth"
        />
      </FormControl>

      {/* Address Section */}
      <Text mb={2} fontSize={"xl"} fontWeight={"bold"} color={"blue.300"}>Address</Text>

      <FormControl mb={5} id="street">
        <FormLabel fontSize={"lg"}>Street:</FormLabel>
        <Input
          type="text" 
          name="street"
          value={formData.address.street}
          onChange={handleAddressChange}
          placeholder="Street name"
        />
      </FormControl>

      <FormControl mb={5} id="city">
        <FormLabel fontSize={"lg"}>City:</FormLabel>
        <Input
          type="text" 
          name="city"
          value={formData.address.city}
          onChange={handleAddressChange}
          placeholder="City name"
        />
      </FormControl>

      <HStack>
        <FormControl mb={5} id="state">
          <FormLabel fontSize={"lg"}>State:</FormLabel>
          <Input
            type="text" 
            name="state"
            value={formData.address.state}
            onChange={handleAddressChange}
            placeholder="Current state"
          />
        </FormControl>
  
        <FormControl mb={5} id="postalCode">
          <FormLabel fontSize={"lg"}>Post Code:</FormLabel>
          <Input
            type="text" 
            name="postalCode"
            value={formData.address.postalCode}
            onChange={handleAddressChange}
            placeholder="Post code"
          />
        </FormControl>
      </HStack>

      <Text mb={2} fontSize={"xl"} fontWeight={"bold"} color={"blue.300"}>Emergency Contact</Text>

      <FormControl mb={5} id="name">
        <FormLabel fontSize={"lg"}>Name:</FormLabel>
        <Input
          type="text" 
          name="name"
          value={formData.emergencyContact.name}
          onChange={handleEmergencyContactChange}
          placeholder="Contact name"
        />
      </FormControl>

      <FormControl mb={5} id="relationship">
        <FormLabel fontSize={"lg"}>Relationship:</FormLabel>
        <Input
          type="text" 
          name="relationship"
          value={formData.emergencyContact.relationship}
          onChange={handleEmergencyContactChange}
          placeholder="Contact relationship"
        />
      </FormControl>

      <FormControl mb={5} id="phoneNumber">
        <FormLabel fontSize={"lg"}>Phone Number:</FormLabel>
        <Input
          type="text" 
          name="phoneNumber"
          value={formData.emergencyContact.phoneNumber}
          onChange={handleEmergencyContactChange}
          placeholder="Contact number"
        />
      </FormControl>

      <FormControl mb={20} id="notes">
        <FormLabel fontSize={"lg"}>Notes:</FormLabel>
        <Textarea 
          height={200} 
          type="text"   
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Please add any notes"
        />
      </FormControl>

      <Button colorScheme='teal' onClick={handleSubmit}>Submit</Button>

    </Box>
  );
};

export default CustomerForm;