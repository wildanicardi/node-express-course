const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const index = require("./routes/index");


app.use(bodyParser.json());
//route
app.use('/users',index);

// listen method will start
app.listen(8000, () => {
  console.log("server is running");
});
