"use strict";

const httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

const routes = {
  GET: {},
  POST: {}
};

exports.handle = (req, res) => {
  try {
    // Ignore any ?query=string when matching routes
    const url = req.url.split("?")[0];

    if (routes[req.method] && routes[req.method][url]) {
      routes[req.method][url](req, res);
    } else {
      utils.getFile("views/error.html", res, httpStatus.NOT_FOUND);
    }
  } catch (ex) {
    console.log("error: " + ex);
    res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.text);
    res.end("Internal server error");
  }
};

exports.get = (url, action) => {
  routes.GET[url] = action;
};

exports.post = (url, action) => {
  routes.POST[url] = action;
};
