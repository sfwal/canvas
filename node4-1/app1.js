const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.listen(8081);

app.use(bodyParser.urlencoded({extended:false}));
app.use("/",(req,res) => {
  console.log(req.body);
})
