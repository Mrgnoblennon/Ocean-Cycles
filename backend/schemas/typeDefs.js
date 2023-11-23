const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Bike {
    id: ID!
    model: String!
  }
`;


module.exports = typeDefs;