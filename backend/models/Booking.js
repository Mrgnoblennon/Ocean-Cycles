// models/Booking.js
const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
  bike: {
    type: Schema.Types.ObjectId,
    ref: 'Bike',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
});

const Booking = model('Booking', bookingSchema);

module.exports = Booking;
