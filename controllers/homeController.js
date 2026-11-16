
"use strict";

const courses = [
  {
    title: "Fresh pasta from scratch",
    length: "3 hours",
    cost: 45
  },
  {
    title: "Weeknight curries",
    length: "2.5 hours",
    cost: 40
  },
  {
    title: "Tacos from the ground up",
    length: "2.5 hours",
    cost: 38
  },
  {
    title: "Knife skills",
    length: "2 hours",
    cost: 30
  }
];

exports.showHome = (req, res) => {
  res.render("index");
};

exports.showCourses = (req, res) => {
  res.render("courses", {
    offeredCourses: courses
  });
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
