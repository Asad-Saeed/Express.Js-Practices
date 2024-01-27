const express = require("express");
const port = 5000;
const app = express();
const members = require("./data");

app.get("/api/members", (req, res) => {
  res.status(200).json(members);
});

app.listen(port, () => {
  console.log(`Application run on port:${port}`);
});
