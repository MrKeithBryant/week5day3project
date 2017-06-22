

const mustacheExpress = require("mustache-express");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("./"));

app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})

app.listen(3000, () => console.log("ready!"));

/*
  -
  - user can input text
  - when user clicks "todo", that text should be added to listen
  - we need to render that list into html
  - must be able to mark off completeds
  -
*/
