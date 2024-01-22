const express = require("express");
const app = express();
const port = 5000;
// app modules get,post,put,patch,delete,all,use,listen
app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});
app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});
app.listen(port, () => {
  console.log(`Example app is running on port ${port}`);
});
