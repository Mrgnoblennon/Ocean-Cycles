// models/Booking.js
const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  bikes: [{
    type: Schema.Types.ObjectId,
    ref: 'Bike',
  }],
  totalAmount: {
    type: Number,
    required: true,
  },
  deposit: {
    type: Number,
    required: true,
  },
  isDepositPaid: {
    type: Boolean,
    default: false,
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid'],
    default: 'Pending',
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
});

const Booking = model('Booking', bookingSchema);

module.exports = Booking;
