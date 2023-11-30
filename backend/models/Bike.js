const { Schema, model } = require('mongoose');

const bikeSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true
  },
});

const Bike = model('Bike', bikeSchema);

module.exports = Bike;