var express = require("express");
var path =require('path');
var app = express();
app.set('etag', false)
app.use(express.static(path.join(__dirname,'www')));
app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname,'www/index.html'));
  
});
app.get("*", function (req, res, next) {
  res.redirect("/");
});
app.listen(4000);
