import React, { useState }  from 'react';
import { Box, Text, Flex, IconButton, Button } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'

import SubHeader from '../Layout/SubHeader';

import CustomerForm from '../Form/CustomerForm';

const Book = ({ pageTitle}) => {

  // Date Picker useState
  const [startDate, setStartDate] = useState(new Date());

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


        <Box mb={10}> 
          <Text mb={5}>How many bikes do you need?</Text>
          
          <Flex align="center">
            <IconButton icon={<MinusIcon />} onClick={decrement} aria-label="Decrement" />
            <Text mx={2}>{count}</Text>
            <IconButton icon={<AddIcon />} onClick={increment} aria-label="Increment" />
          </Flex>
        </Box>

        <Box mb={10}>
          <Text mb={5}>Which day would you like to rent?</Text>

          <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          />
        </Box>

        <Box mb={10}>
          <Text>Total amount: {totalAmount} </Text>
          <Text>Deposit payment required: {deposit}</Text>
        </Box>

        <Button mb={20}>Book Now</Button>

        <CustomerForm/>

      </Box>
    </div>
  );
};

export default Book;
