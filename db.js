
"use strict";

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

let database;

async function connectToDatabase() {
  await client.connect();

  database = client.db("confetti_cuisine");

  console.log("Connected to the Confetti Cuisine database!");
}

function getDb() {
  if (!database) {
    throw new Error("Database has not been connected yet.");
  }

  return database;
}

module.exports = {
  connectToDatabase,
  getDb
};
