

"use strict";

const express = require("express");
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", homeController.showHome);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

async function startServer() {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/confetti_cuisine"
    );

    console.log("Connected to MongoDB with Mongoose!");

    app.listen(app.get("port"), () => {
      console.log(
        `Server running at http://localhost:${app.get("port")}`
      );
    });
  } catch (error) {
    console.error("Unable to start the application:", error);
    process.exit(1);
  }
}

startServer();
