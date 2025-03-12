const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Enter your session ID",
  MONGODB: process.env.MONGODB || "mongodb://mongo:BWwDRowxYWJTnJwGMHmWDAIAxMkAkHgH@turntable.proxy.rlwy.net:34838",
  OWNER_NUM: process.env.OWNER_NUM || "94763007898",
};
