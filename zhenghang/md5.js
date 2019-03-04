const crypto = require("crypto");

var hash = crypto.createHash("md5");

hash.update("admin");

var str = hash.digest("hex");

console.log(str);
