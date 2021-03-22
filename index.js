const express = require("express"),
  path = require("path"),
  app = express();

require("dotenv").config();

const port = process.env.PORT;
let build = process.env.NODE_ENV == "developement" ? "dist" : "build";
console.log(
  `${process.env.NODE_ENV == "developement" ? "Dev" : "Production"} build`
);

console.log(path.join(__dirname, build));

app.use("/", express.static(path.join(__dirname, build)));

app.get("/plate-tracker", function (req, res) {
  res.sendFile(path.join(__dirname, build, "plate-tracker.html"));
});
app.get("/trading-platforms", function (req, res) {
  res.sendFile(path.join(__dirname, build, "trading-platforms.html"));
});
app.get("/freelance", function (req, res) {
  res.sendFile(path.join(__dirname, build, "freelance.html"));
});
app.get("/multicam", function (req, res) {
  res.sendFile(path.join(__dirname, build, "multicam.html"));
});

app.listen(process.env.PORT || port, function () {
  console.log(`portfolio app listening at ${process.env.PORT || port}`);
});
