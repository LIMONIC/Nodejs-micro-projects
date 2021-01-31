const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// const request = require("request");
// const https = require("https");

const app = express();

const items = ["Buy food"]; // in js, const for array can be changed but not allowed to assign to a new value
const workItems = [];
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  let day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  }); // key must matchs with the variable name in ejs

  // res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }


});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.post("/work", function() {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render("about");
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
