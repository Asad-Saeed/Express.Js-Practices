const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const port = 5000;
// Init middleware {middleware always use before route}
// Every time we make a request we see hello print
// app.use(logger);
// Boday Parser middleware for POST
app.use(express.json()); //handle raw json
app.use(express.urlencoded({extended:false})); //handle form submittion for url encoded data
// Members api routes
app.use("/api/members", require("./routes/api/members"));


app.listen(port, () => {
  console.log(`Example app is running on port ${port}`);
});
