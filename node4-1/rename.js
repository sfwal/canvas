const fs = require("fs");
// fs.rename("文件名"，"改成啥","回调")
fs.rename('b.txt','b.jpg',(err) => {
  console.log(err);
})
