const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const pathLib = require("path");
const fs = require("fs");

const app = express();
app.listen(8081);

var upload = multer({dest:"./upload/"});

// app.use(bodyParser.urlencoded({extended:false}));
app.use(upload.any());
app.use("/",(req,res) => {
  // console.log(req.files);
  var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
  fs.rename(req.files[0].path,newName,(err) => {
    console.log(err);
  })
})
