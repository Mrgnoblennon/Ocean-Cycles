// PaymentForm.js
import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useMutation } from '@apollo/client';
import { CREATE_PAYMENT_INTENT } from '../../utils/mutations';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [createPaymentIntent] = useMutation(CREATE_PAYMENT_INTENT);
  const [clientSecret, setClientSecret] = useState('');

  const handleCreatePaymentIntent = async () => {
    try {
      // Call the createPaymentIntent mutation to get the client secret
      const { data } = await createPaymentIntent({
        variables: {
          amount: 1000, // Replace with the actual amount
          currency: 'usd', // Replace with the actual currency
        },
      });

      // Extract the client secret from the response
      const { createPaymentIntent: { clientSecret } } = data;
      setClientSecret(clientSecret);
    } catch (error) {
      console.error('Error fetching client secret:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      console.error('Stripe, Elements, or client secret is not available.');
      return;
    }

    try {
      // Confirm the payment using the obtained client secret
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement), // Replace with PaymentElement if you're using it
        },
      });

      if (result.error) {
        console.error('Payment confirmation error:', result.error);
        // Handle payment failure
      } else {
        // Payment succeeded
        console.log('Payment succeeded:', result.paymentIntent);
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {/* Include your payment form components here, such as CardElement */}
        <Button
          mt={4}
          colorScheme="teal"
          type="button"
          onClick={handleCreatePaymentIntent}
        >
          Get Client Secret
        </Button>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </Button>
      </form>
    </Box>
  );
};

export default PaymentForm;
