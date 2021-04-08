// This js helps our data to determine what the user
// sees and what data the user is able to post onto
// the server to store

// Dependencies to read json
const fs = require("fs");

// installed unique Id package from npm
var uniqid = require("uniqid");

// brought in json data from data directory
const notesRead = require("../data/db/db.json");

// ROUTING
module.exports = function (app) {
  // API GET Requests
  app.get("/api/notes", function (req, res) {
    console.log("Execute GET notes request");

    res.json(notesRead);
    // read the db.json file using readFile
    let data = JSON.parse(fs.readFile(notesRead, "utf8"));

    console.log("We can read the notes data" + JSON.stringify(data));

    // Send response of json data of GET request
    res.json(data);
  });

  // API POST Requests
  app.post("/api/notes", function (req, res) {
    // grab new notes from body
    const notesNew = req.body;
    notesNew.push(req.body);
  });

  //   API DELETE Request
};
