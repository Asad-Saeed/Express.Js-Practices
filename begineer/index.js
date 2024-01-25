const path = require("path")
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
app.get("/table", (req, res) => {
  // res.status(200).sendFile(path.join(__dirname,"public","index1.html"));
  res.status(200).sendFile(path.resolve(__dirname,"public","index2.html"));
});
// // Dont use above method t show file use express use to set static folder
// Set Static folder
// app.use(express.static(path.join(__dirname,"public")))
// make this at last of every request
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});
app.listen(port, () => {
  console.log(`Example app is running on port ${port}`);
});
