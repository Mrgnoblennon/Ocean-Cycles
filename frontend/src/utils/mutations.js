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