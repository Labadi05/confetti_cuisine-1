
"use strict";

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  length: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model("Course", courseSchema);
