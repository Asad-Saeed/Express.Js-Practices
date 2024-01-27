const express = require("express");
const app = express();
const {engine } = require("express-handlebars");
// const logger = require("./middleware/logger");
const members=require("./data")
const port = 5000;
// Express HandleBars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
// Home Page route
app.get('/', (req, res) => {
  res.render('index',{
    title:"Member App",
    members:members
  });
});
// Init middleware {middleware always use before route}
// Every time we make a request we see hello print
// app.use(logger);
// Boday Parser middleware for POST
app.use(express.json()); //handle raw json
app.use(express.urlencoded({ extended: false })); //handle form submittion for url encoded data

// Members api routes
app.use("/api/members", require("./routes/api/members"));

app.listen(port, () => {
  console.log(`Example app is running on port ${port}`);
});
