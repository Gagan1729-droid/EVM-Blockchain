require('dotenv').config();
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: process.env.HOSTNAME, // assign your host name
  user: process.env.USER,      //  assign your database username
  password: process.env.PASS,      // assign your database password
  database: process.env.DATABASE // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;