require('dotenv').config();
var express = require('express');
var app = express();
const ejs = require("ejs");
// app.use(express.static('public'));
app.use(express.urlencoded());
var session = require('express-session');
var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var path = require('path');
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.use(express.static('src'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/src/index.html'));
})




const port = process.env.PORT || 3000;

app.listen(port);
console.log("Server listening on port "+port);