"use strict";

const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  zipCode: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("Subscriber", subscriberSchema);