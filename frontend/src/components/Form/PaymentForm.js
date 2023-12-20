import React, { useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { useMutation } from '@apollo/client';
import { CREATE_PAYMENT_INTENT } from '../../utils/mutations';
import { Box, Button, Text, Input, Heading } from '@chakra-ui/react';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      border: '1px solid #ced4da', // Add a border to create an outline box
      borderRadius: '4px', // Add border-radius for rounded corners
      padding: '10px', // Add padding for spacing
    },
  },
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [zipCode, setZipCode] = useState(""); // For capturing ZIP code

  const [createPaymentIntent] = useMutation(CREATE_PAYMENT_INTENT, {
    onError: (error) => {
      console.error('Error creating PaymentIntent:', error);
      setError('Failed to create PaymentIntent');
    },
  });

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      console.error('Stripe has not loaded.');
      return;
    }

    const amount = 1000; // Example amount
    const currency = 'aud';

    try {
      const { data } = await createPaymentIntent({
        variables: { amount, currency },
      });

      if (data && data.createPaymentIntent) {
        const clientSecret = data.createPaymentIntent.clientSecret;

        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardNumberElement),
            billing_details: {
              address: {
                postal_code: zipCode,
              },
            },
          },
        });

        if (result.error) {
          console.error('Error in payment confirmation:', result.error);
          setError(result.error.message);
        } else {
          console.log('Payment successful:', result.paymentIntent);
        }
      }
    } catch (error) {
      console.error('Error in payment intent creation:', error);
      setError(error.message || 'Failed to create payment intent');
    }
  };

  return (
    <Box bg="white" p={20} boxShadow="lg" borderRadius={2} as="form" onSubmit={handlePayment}>

      <Heading fontSize={"xl"}>
        Card Number
        <CardNumberElement options={CARD_ELEMENT_OPTIONS}/>
      </Heading>

      <Heading fontSize={"xl"}>
        Card Expiry
        <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
      </Heading>

      <Heading fontSize={"xl"}>
        CVC
        <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
      </Heading>

      <Heading fontSize={"xl"}>
        Zip 
        <Input 
          placeholder="ZIP Code" 
          mt={4} 
          value={zipCode} 
          onChange={(e) => setZipCode(e.target.value)} 
        />
      </Heading>

      <Button colorScheme='teal' mt={"50"} type="submit" isDisabled={!stripe}>
        Pay
      </Button>
      
      {error && <Text color="red">Error: {error}</Text>}
    </Box>
  );
};

export default PaymentForm;
