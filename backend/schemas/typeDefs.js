// schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`

  scalar Date

  type Bike {
    _id: ID!
    model: String!
  }

  
  type Address {
    street: String
    city: String
    state: String
    postalCode: String
  }

  type EmergencyContact {
    name: String
    relationship: String
    phoneNumber: String
  }
  
  type Booking {
    _id: ID!
    temporaryBookingId: String!
    bikes: [Bike]!
    startDate: String!
    endDate: String!
    totalAmount: Float!
    deposit: Float!
    isDepositPaid: Boolean!
    paymentStatus: String!
    customer: Customer
  }
  
  type Customer {
    _id: ID
    firstName: String!
    lastName: String!
    mobileNumber: String!
    email: String!
    address: Address
    dateOfBirth: Date
    emergencyContact: EmergencyContact
    notes: String
  }

  input BikeInput {
    bikeId: ID!
  }

  input CustomerInput {
    firstName: String!
    lastName: String!
    mobileNumber: String!
    email: String!
    address: AddressInput
    dateOfBirth: String
    emergencyContact: EmergencyContactInput
    notes: String
  }

  input AddressInput {
    street: String
    city: String
    state: String
    postalCode: String
  }

  input EmergencyContactInput {
    name: String
    relationship: String
    phoneNumber: String
  }

  type Query {
    getBikes: [Bike]!
    getBooking(bookingId: ID!): Booking
  }

  type Mutation {
    addCustomer(input: CustomerInput!): Customer

    initiateBooking(bikesInput: [BikeInput]!, startDate: String!, endDate: String!, totalAmount: Float!, deposit: Float!): Booking
    completeBooking(temporaryBookingId: String!, customer: CustomerInput!): Booking
  }
`;

module.exports = typeDefs;
