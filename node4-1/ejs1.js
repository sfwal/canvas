const ejs = require("ejs");

// ejs.renderFile(filename, data, options, function(err, str){
//     // str => 输出绘制后的 HTML 字符串
// });
var data = {
  name:"粥品香坊（回龙观）",
  description: "蜂鸟专送",
  list:[
    {username:"zhangsan",pass:"123456"},
    {username:"lisi",pass:"123456"},
    {username:"wangwu",pass:"123456"},
    {username:"zhaoliu",pass:"123456"},
  ]
}
ejs.renderFile('./template/1.ejs',data,(err,data) => {
  console.log(data);
})
