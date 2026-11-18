
"use strict";

const Course = require("../models/course");

exports.showHome = (req, res) => {
  res.render("index");
};

exports.showCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();

    res.render("courses", {
      offeredCourses: courses
    });
  } catch (error) {
    next(error);
  }
};

exports.showSignUp = (req, res) => {
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  console.log("Name:", req.body.name);
  console.log("Email:", req.body.email);
  console.log("Course:", req.body.class);
  console.log("Message:", req.body.message);

  res.render("thanks");
};
