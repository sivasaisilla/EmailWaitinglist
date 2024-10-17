const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "807738",
  database: "join_us",
});

app.get("/", function (req, res) {
  const q = "SELECT COUNT(*) as count FROM users";
  connection.query(q, function (error, results) {
    if (error) throw error;
    const count = results[0].count;
    res.render("home", { data: count });
  });

});

app.post("/register", function (req, res) {
  var person = { email: req.body.email };
  connection.query("INSERT INTO users SET ?", person, function (err, result) {
    console.log(err);
    console.log(result);
    res.redirect("/");
  });

});

app.listen(3000, () => {
  console.log("running on port 3000");
});
