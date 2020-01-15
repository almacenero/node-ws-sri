var express = require("express");
var app = express();
var { getXMLSchema } = require("./src/xmlSchema");

console.log(getXMLSchema());

app.get("/", function(req, res) {
  res.send(getXMLSchema());
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
