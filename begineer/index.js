const path = require("path");
const express = require("express");
const app = express();
const members = require("./data");
const logger=require("./middleware/logger")
const port = 5000;


// Init middleware
// Every time we make a request we see hello print
app.use(logger);

app.get("/api/members", (req, res) => {
  res.status(200).json(members);
});
app.listen(port, () => {
  console.log(`Example app is running on port ${port}`);
});
