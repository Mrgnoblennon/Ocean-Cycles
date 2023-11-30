// models/Customer.js
const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  creditCardDetails: {
    cardNumber: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
  },
  dateOfBirth: {
    type: Date,
  },
  emergencyContact: {
    name: String,
    relationship: String,
    phoneNumber: String,
  },
  notes: {
    type: String,
  },
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;
