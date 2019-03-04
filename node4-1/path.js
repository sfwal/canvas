const path = require("path");
var url = "c:\\desktop\\aaa\\abc3.jpg";
var obj = path.parse(url);
console.log(obj);

// root 磁盘
// dir 文件夹路径
// base 文件名（包含后缀）
// ext  后缀
// name 文件名（不包含后缀）
