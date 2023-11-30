// graphql/resolvers.js
const Bike = require('../models/Bike');

const resolvers = {
  Query: {
    bikes: async () => {
      try {
        const bikes = await Bike.find();
        return bikes;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },
  Mutation: {
    addBike: async (_, { model, quantity }) => {
      try {
        const newBike = new Bike({ model, quantity });
        const savedBike = await newBike.save();
        return savedBike;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },
};

module.exports = resolvers;
