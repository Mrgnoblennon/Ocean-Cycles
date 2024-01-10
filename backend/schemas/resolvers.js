// resolvers.js
const { ObjectId } = require('mongoose').Types;
const Bike = require('../models/Bike');
const Customer = require('../models/Customer');
const Booking = require('../models/Booking');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type as dd-mm-yyyy',
  
  // Serializes a Date to a string in dd-mm-yyyy format
  serialize(value) {
    if (value instanceof Date) {
      return value.toISOString().split('T')[0].split('-').reverse().join('-');
    }
    throw new Error('Expected a Date object');
  },
  
  // Parses a date string in dd-mm-yyyy format to a Date
  parseValue(value) {
    if (typeof value === 'string') {
      const [day, month, year] = value.split('-').map(Number);
      return new Date(year, month - 1, day);
    }
    throw new Error('Expected a date string in dd-mm-yyyy format');
  },
  
  // Parses AST literals to a Date
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const [day, month, year] = ast.value.split('-').map(Number);
      return new Date(year, month - 1, day);
    }
    return null; // Invalid hard-coded value
  },
});

const resolvers = {
  Date: dateScalar, // Add the Date scalar resolver
  
  Query: {
    getBooking: async (_, { bookingId }) => await Booking.findById(bookingId),
    getAllBikes: async () => {
      return await Bike.find({});
    },
    getAvailableBikes: async () => {
      return await Bike.find({ isAvailable: true });
    },
    getBikeById: async (_, { id }) => {
      return await Bike.findById(id);
    }
  },
  Mutation: {
    //addBike: async (_, { model, isAvailable }) => {
    //  const newBike = new Bike({ model, isAvailable });
    //  return await newBike.save();
    //},
    createBooking: async (_, { input }) => {
      const { startDate, endDate, bikes, customer } = input;
    
      // Fixed values for financial fields
      const fixedTotalAmount = 100.00; // Example value
      const fixedDeposit = 20.00; // Example value
    
      // Create a new booking object
      const newBooking = new Booking({
        startDate,
        endDate,
        bikes,
        customer,
        totalAmount: fixedTotalAmount,
        deposit: fixedDeposit,
        isDepositPaid: true,
        paymentStatus: 'Paid'
      });
    
      // Save the booking to the database
      await newBooking.save();
    
      // Populate customer and bike data
      const populatedBooking = await Booking.findById(newBooking._id)
        .populate({
          path: 'customer',
          select: 'firstName' // Assuming 'firstName' is a field in the 'Customer' model
        })
        .populate({
          path: 'bikes',
          select: 'model' // Assuming 'model' is a field in the 'Bike' model
        });
    
      return populatedBooking;
    },
    updateBikeAvailability: async (_, { id, isAvailable }) => {
      return await Bike.findByIdAndUpdate(id, { isAvailable }, { new: false });
    },
    addCustomer: async (_, { input }) => {
      try {
        const customer = new Customer(input);
        const result = await customer.save();
        return result;
      } catch (error) {
        throw new Error(`Error adding customer: ${error.message}`);
      }
    },
     createPaymentIntent: async (_, { amount, currency }) => {
      try {
        // Create a PaymentIntent using the Stripe API
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency,
          // Other relevant options, such as metadata, description, etc.
        });

        console.log('Client Secret:', paymentIntent.client_secret);

        // Return the client secret as part of the response
        return {
          clientSecret: paymentIntent.client_secret,
        };
      } catch (error) { 
        console.error('Error creating PaymentIntent:', error);
        throw new Error('Failed to create PaymentIntent');
      }
    },
  },
};

module.exports = resolvers;
