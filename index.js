// const Bundler = require("parcel-bundler");
const express = require("express");
//   bodyParser = require("body-parser");
const app = express();

// serve static files in public
app.use(express.static("public"));

// root is index.html
app.get("/", function(req, res) {
  res.sendFile("views/index.html", { root: __dirname });
});
// routes
app.get("/Addison_Moore-Resume.pdf", function(req, res) {
  res.sendFile("views/Addison_Moore-Resume.pdf", { root: __dirname });
});
app.get("/learnify.html", function(req, res) {
  res.sendFile("views/learnify.html", { root: __dirname });
});
app.get("/east-bay-gems.html", function(req, res) {
  res.sendFile("views/east-bay-gems.html", { root: __dirname });
});
app.get("/multicam.html", function(req, res) {
  res.sendFile("views/multicam.html", { root: __dirname });
});
app.get("/plate-tracker.html", function(req, res) {
  res.sendFile("views/plate-tracker.html", { root: __dirname });
});

//run server on port 3000
const port = 3000;

app.listen(process.env.PORT || port, function() {
  console.log(`portfolio app listening at ${process.env.PORT || port}`);
});
