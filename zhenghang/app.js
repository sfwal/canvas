const express = require('express');
const static = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParse = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const mysql = require('mysql');
const upload = multer({dest:"./www/uploads"});

const app = express();
app.listen(8081);

//解析请求数据post
app.use(bodyParser.urlencoded({extended:false}))
app.use(upload.any());

//解析cookie、session
app.use(cookieParse());
(function(){
  var keys = [];
  for(var i=0;i<10000;i++){
    keys.push("zhenghang_" + Math.random());
  }
  app.use(cookieSession({
    name:"admin_id",
    keys:keys,
    maxAge:30*60*1000
  }))
})();

//设置模版
app.engine("html",consolidate.ejs);
app.set("views","./template");
app.set("view engine","html");

//设置路由
// app.use("/",);
app.use("/admin",require("./router/admin/index.js")());

//静态页面
app.use(static("./www/"))
