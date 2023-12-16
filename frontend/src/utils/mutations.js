import { gql } from '@apollo/client';

export const ADD_CUSTOMER = gql`
  mutation Mutation($input: CustomerInput!) {
    addCustomer(input: $input) {
      _id
      firstName
      lastName
      mobileNumber
      email
      dateOfBirth
      address {
        city
        postalCode
        state
        street
      }
      emergencyContact {
        name
        phoneNumber
        relationship
      }
      notes
    }
  }
`;

export const CREATE_PAYMENT_INTENT = gql `
  mutation CreatePaymentIntent($amount: Int!, $currency: String!) {
    createPaymentIntent(amount: $amount, currency: $currency) {
      clientSecret
    }
  }  
`;