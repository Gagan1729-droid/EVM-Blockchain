require("dotenv").config();
var express = require("express");
var app = express();
const ejs = require("ejs");
// app.use(express.static('public'));
app.use(express.urlencoded());
var session = require("express-session");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require("path");

app.use(
  session({
    secret: "helloworld",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 10000 * 300 },
  })
);

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/src"));

var registrationRouter = require("./routes/register");
var loginRouter = require("./routes/login");
var adminRouter = require("./routes/admin-login");

app.use("/", registrationRouter);
app.use("/", loginRouter);
app.use("/", adminRouter);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/src/index.html"));
});

app.get("/userInfo", function (req, res) {
  res.sendFile(__dirname + "/src/userInfo.html");
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log("Server listening on port " + port);
