// resolvers.js
const { ObjectId } = require('mongoose').Types;
const { mongoose } =require('mongoose');
const Bike = require('../models/Bike');
const Customer = require('../models/Customer');
const Booking = require('../models/Booking');

const resolvers = {
  Query: {
    getBikes: async () => await Bike.find(),
    getBooking: async (_, { bookingId }) => await Booking.findById(bookingId),
  },
  Mutation: {
    addBike: async (_, { model, quantity }) => {
      try {
        // Create a new bike instance
        const newBike = new Bike({
          model,
          quantity,
          // Add other bike fields as needed
        });

        // Save the new bike to the database
        const savedBike = await newBike.save();

        // Return the saved bike data
        return savedBike;
      } catch (error) {
        console.error('Error adding bike:', error);
        throw new Error('Failed to add bike. Please try again.');
      }
    },
    initiateBooking: async (_, { bikesInput, startDate, endDate, totalAmount, deposit }) => {
      try {
        // Generate a temporary booking ID
        const temporaryBookingId = generateTemporaryBookingId();
    
        // Log bikesInput data
        console.log('bikesInput data:', bikesInput);
    
        // Create a new booking document with the provided details
        const newBooking = new Booking({
          temporaryBookingId,
          bikes: bikesInput.map(bike => {
            // Log each bike being processed
            console.log('Processing bike:', bike.bikeId);
    
            // Assuming bike.bikeId is a valid hexadecimal string or ObjectId
            return new ObjectId(bike.bikeId);
          }),
          startDate,
          endDate,
          totalAmount,
          deposit,
          isDepositPaid: false,
          paymentStatus: 'Pending',
        });
    
        // Save the new booking document to the database
        const savedBooking = await newBooking.save();
    
        // Return the booking document with the temporary booking ID
        return savedBooking;
      } catch (error) {
        console.error('Error initiating booking:', error);
        throw new Error('Failed to initiate booking. Please try again.');
      }
    },
    completeBooking: async (_, { temporaryBookingId, customer }) => {
      try {
        // Find the booking document using the temporary booking ID
        const bookingToUpdate = await Booking.findOne({ temporaryBookingId });

        // If the booking is not found, throw an error
        if (!bookingToUpdate) {
          throw new Error('Booking not found. Please initiate a new booking.');
        }

        // Create a new customer document with the provided details
        const newCustomer = new Customer(customer);

        // Save the new customer document to the database
        const savedCustomer = await newCustomer.save();

        // Update the booking document with the customer details and save to the database
        bookingToUpdate.customer = savedCustomer._id;
        const updatedBooking = await bookingToUpdate.save();

        // Return the finalized booking document
        return updatedBooking;
      } catch (error) {
        console.error('Error completing booking:', error);
        throw new Error('Failed to complete booking. Please try again.');
      }
    },
  },
};

// Function to generate a temporary booking ID (you may use a library for this)
function generateTemporaryBookingId() {
  // Sample implementation using a simple timestamp-based ID
  return `TMP_${Date.now()}`;
}

module.exports = resolvers;
