'use strict';

const mongoose = require('mongoose');

const Animal = mongoose.model('Animal', {
  received: Date,
  killDate: Date,
  name: String,
  type: String,
  breed: String,
  age: Number,
  pounds: Number,
  price: Number
});

module.exports = Animal;
