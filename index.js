var express = require("express");
var app = express();
var builder = require("xmlbuilder");

var xml = builder
  .create("root")
  .ele("xmlbuilder")
  .ele("repo", { type: "git" }, "git://github.com/oozcitak/xmlbuilder-js.git")
  .end({ pretty: true });

//console.log(xml);

var obj = {
  root: {
    xmlbuilder: {
      repo: {
        "@type": "git", // attributes start with @
        "#text": "git://github.com/oozcitak/xmlbuilder-js.git" // text node
      }
    }
  }
};

var xml2 = builder.create(obj).end({ pretty: true });

console.log(xml2);

app.get("/", function(req, res) {
  res.send(xml);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
