"use strict";

const fs = require("fs"),
  path = require("path"),
  httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes");

// Folder that contains main.js (so paths work wherever you start node from)
const root = __dirname;

module.exports = {
  // Reads a file (relative to the project folder) and writes it to the response
  getFile: (file, res, status = httpStatus.OK) => {
    const filePath = path.join(root, file);

    // Safety: never serve anything outside the project folder
    if (!filePath.startsWith(root)) {
      res.writeHead(httpStatus.FORBIDDEN, contentTypes.text);
      return res.end("Forbidden");
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.NOT_FOUND, contentTypes.html);
        return res.end("<h1>404</h1><p>There is no such file.</p>");
      }
      const ext = path.extname(filePath).slice(1);
      res.writeHead(status, contentTypes[ext] || contentTypes.text);
      res.end(data);
    });
  }
};
