import React, { useState } from 'react';
import { Box, Flex, IconButton, Button, Text } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const BikeAvailabilityForm = () => {

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

  return (
    <Box bg="white" p={20} boxShadow="lg" borderRadius={2}>
      
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
          <Text>Total amount:  </Text>
          <Text>Deposit payment required:</Text>
        </Box>

        <Button mb={20} colorScheme='teal'>Book Now</Button>
      
    </Box>
  );
};

export default BikeAvailabilityForm;