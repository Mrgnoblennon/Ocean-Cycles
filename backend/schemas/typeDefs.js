// graphql/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Bike {
    _id: ID!
    model: String!
    quantity: Int!
  }

  type Query {
    bikes: [Bike]
  }

  type Mutation {
    addBike(model: String!, quantity: Int!): Bike
  }
`;

module.exports = typeDefs;
