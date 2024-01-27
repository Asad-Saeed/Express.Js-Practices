const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const port = 5000;
// Members api routes
app.use("/api/members", require("./routes/api/members"));
// Init middleware
// Every time we make a request we see hello print
app.use(logger);

app.listen(port, () => {
  console.log(`Example app is running on port ${port}`);
});
