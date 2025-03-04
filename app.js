const express = require("express"),
  path = require("path"),
  app = express(),
  { PORT, NODE_ENV } = require("./config");

require("dotenv").config();

let build = NODE_ENV == "production" ? "build" : "dist";
console.log(`${NODE_ENV} build`);

console.log(path.join(__dirname, build));

app.use("/", express.static(path.join(__dirname, build)));

app.get("/plate-tracker", function (_req, res) {
  res.sendFile(path.join(__dirname, build, "plate-tracker.html"));
});
app.get("/trading-platforms", function (_req, res) {
  res.sendFile(path.join(__dirname, build, "trading-platforms.html"));
});
app.get("/freelance", function (_req, res) {
  res.sendFile(path.join(__dirname, build, "freelance.html"));
});
app.get("/multicam", function (_req, res) {
  res.sendFile(path.join(__dirname, build, "multicam.html"));
});

app.listen(PORT, function () {
  console.log(`App running at http://localhost:${PORT}`);
});
