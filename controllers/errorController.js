
"use strict";

const { StatusCodes } = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).render("error");
};

exports.internalServerError = (error, req, res, next) => {
  console.log(`ERROR occurred: ${error.stack}`);

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("500 | Sorry, our application is taking a nap!");
};
