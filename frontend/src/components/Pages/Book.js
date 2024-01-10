import React from 'react';
import { Box } from '@chakra-ui/react';

import SubHeader from '../Layout/SubHeader';

import BikeAvailabilityForm from '../Form/BikeAvailabilityForm';
import CustomerForm from '../Form/CustomerForm';
import PaymentForm from '../Form/PaymentForm';



const Book = ({ pageTitle}) => {

  return (
    <div>
      <SubHeader pageTitle={"Book Now"}/>
      <Box bg="green.200" width={"100%"} minHeight={800} px={100}>
        
        <BikeAvailabilityForm/>

        {/* Customer form completed */}
        <CustomerForm/>

        <PaymentForm/>

      </Box>
    </div>
  );
};

export default Book;
