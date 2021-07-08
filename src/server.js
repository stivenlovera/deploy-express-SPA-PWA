var express = require("express");
var app = express();
app.use(express.static("./www/")); //dist/front-update
app.get("/", function (req, res, next) {
  res.redirect("/");
});
app.get("*", function (req, res, next) {
  res.redirect("/");
});
app.listen(4000);
