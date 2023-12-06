const { Schema, model } = require('mongoose');

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
})

const Person = model('Person', personSchema);

module.exports = Person;