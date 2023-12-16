import React, { useState }  from 'react';
import { Box, Text, Flex, IconButton, Button } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'

import SubHeader from '../Layout/SubHeader';

import CustomerForm from '../Form/CustomerForm';
import PaymentForm from '../Form/PaymentForm';

const Book = ({ pageTitle}) => {

  const [formData, setFormData] = useState({
    startDate: null, // check
    endDate: null,   // check
    bikes: [],       // Initialize with an empty array
    totalAmount: 0,  // Initialize with 0
    deposit: 0,      // Initialize with 0
    isDepositPaid: false,
    paymentStatus: 'Pending',  // Set to a default value from the enum in the model
    customer: '',    // Initialize with an empty string or appropriate default value
  });

  // Date Picker useState
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);

    // Log selected start and end dates to the console
    console.log('Selected Start Date:', start);
    console.log('Selected End Date:', end);
  };

  // Bike quantity counter
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const totalAmount = (count*80);
  const deposit = (count*50);

  return (
    <div>
      <SubHeader pageTitle={"Book Now"}/>
      <Box bg="green.200" width={"100%"} minHeight={800} px={100}>

        {/* Counter needs work, it needs to give a value for the total amount of bikes wanted plus an array of bikes wanted*/}
        <Box mb={10}> 
          <Text mb={5}>How many bikes do you need?</Text>
          
          <Flex align="center">
            <IconButton icon={<MinusIcon />} onClick={decrement} aria-label="Decrement"/>
            <Text mx={2}>{count}</Text>
            <IconButton icon={<AddIcon />} onClick={increment} aria-label="Increment" />
          </Flex>
        </Box>

        {/* Date Picker continue */}
        <Box mb={10}>
          
          <Text mb={5}>Which day would you like to rent?</Text>

          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            dateFormat="dd/MM/yyyy"
          />

        </Box>

        {/* Total amounts continur */}
        <Box mb={10}>
          <Text>Total amount: {totalAmount} </Text>
          <Text>Deposit payment required: {deposit}</Text>
        </Box>

        <Button mb={20} colorScheme='teal'>Book Now</Button>

        {/* Customer form completed */}
        <CustomerForm/>

        <PaymentForm/>

      </Box>
    </div>
  );
};

export default Book;
