const crypto = require("crypto");

module.exports = {
  md5_sign:"weafewwf@$#%^%&%$^#%@$#$%^#%@$dweaEWFWFWFW12312312312311242454",
  md5:function(str){
    var hash = crypto.createHash("md5").update(str);
    return hash.digest("hex");
  }
}
