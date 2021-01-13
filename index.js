const express = require("express"),
  path = require("path"),
  app = express();

require("dotenv").config();

const port = process.env.PORT;
let build = process.env.BUILD_ENV == "dev" ? "dist" : "build";
console.log(`${process.env.BUILD_ENV == "dev" ? "Dev" : "Production"} build`);

console.log(path.join(__dirname, build));

app.use("/", express.static(path.join(__dirname, build)));

app.listen(process.env.PORT || port, function () {
  console.log(`portfolio app listening at ${process.env.PORT || port}`);
});
