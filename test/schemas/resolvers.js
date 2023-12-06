// resolvers.js
const { mongoose } = require('mongoose');

const Person = require('../models/Person');
const Item = require('../models/Item');

const resolvers = {
  Query: {
    getPerson: async (_, { _id }) => {
      // Use Mongoose's populate method to get a person with populated items
      const person = await Person.findById(_id).populate('item');
      return person;
    },
    getAllPeople: async () => {
      try {
        const allPeople = await Person.find().populate({ path: 'items', select: 'name' }).exec();;
        return allPeople;
      } catch (error) {
        console.error('Erri fetching people:', errro);
        throw new Error('Failed to fetch people');
      }
    },
    getAllItems: async () => {
      try {
        const allItems = await Item.find();
        return allItems;
      } catch (error) {
        console.error('Error fetching items:', error);
        throw new Error('Failed to fetch items');
      }
    },
  },

  Mutation: {
    createPerson: async (_, { name, itemIds }) => {
      // Create a person with references to items
      const newPerson = await Person.create({
        name,
        items: itemIds,
      });

      // Use Mongoose's populate method to get the created person with populated items
      const personWithItems = await Person.findById(newPerson._id).populate({ path: 'items', select: 'name' }).exec();

      return personWithItems;
    },
    createItem: async (_, { name }) => {

      const newItem = await Item.create({
        name
      });
      
      return newItem;
    }
  },
};

module.exports = resolvers;
