"use strict";

const Subscriber = require("../models/subscriber");

exports.getSubscriptionPage = (req, res) => {
  res.render("contact");
};

exports.saveSubscriber = async (req, res, next) => {
  try {
    const newSubscriber = new Subscriber({
      name: req.body.name,
      email: req.body.email,
      zipCode: req.body.zipCode
    });

    await newSubscriber.save();

    res.render("thanks");
  } catch (error) {
    next(error);
  }
};