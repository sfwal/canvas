const express = require("express");
const static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const multer = require("multer");
const ejs = require("ejs");
let adminRouter = require('./libs/admin/admin_router');
let webRouter = require('./libs/web/web_router');

const app = express();
app.listen("8081");

// 1、解析cookie
app.use(cookieParser("fweffe"));
// 2、使用session
app.use(cookieSession({name:"user_id",key:["asd","wdwd"],maxAge:2*3600*1000}));
// 3、post数据
app.use(bodyParser.urlencoded(extended:false));
app.use(multer({dist:'./www/uploads'}).any());
// 4、模板引擎配置
// 5、接收用户请求
app.use("/admin",adminRouter);
app.use("/",webRouter);
// 6、static数据
app.use(static("./www"));
