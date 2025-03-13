const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "TYQUHJxI#KgBYUQ1JPHHNJddAL4BpyAKgb4O6YL1MW18yieDYVTQ",
  OWNER_NUM: process.env.OWNER_NUM || "94763007898",
};
