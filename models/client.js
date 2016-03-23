'use strict';

const mongoose = require('mongoose');

const Client = mongoose.model('Client', {
  name: String,
  type: String,
  phone: String,
  email: String,
  spam: Boolean,
  photo: String
})
