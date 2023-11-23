const { Schema, model } = require('mongoose');

const bikeScema = new Schema({
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

const newBike = new Bike({
    model: 'Example Model',
    quantity: 5,
  });
  
  newBike.save();

module.exports = Bike;