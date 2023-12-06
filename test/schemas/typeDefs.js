// schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Person {
    _id: ID!
    name: String!
    items: [Item]
  }

  type Item {
    _id: ID!
    name: String!
  }

  type Query {
    getPerson(_id: ID!): Person
    getAllPeople: [Person]
    getAllItems: [Item]
  }

  type Mutation {
    createPerson(name: String!, itemIds: [ID]): Person
    createItem(name: String!): Item
  }
`;

module.exports = typeDefs;
