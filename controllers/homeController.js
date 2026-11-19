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