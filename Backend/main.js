var mysql = require('mysql');
var http = require("http");
var express = require('express');
var post  = {id: 1, title: 'Hello MySQL'};
/*var query = connection.query('INSERT INTO posts SET ?', post, function(err, result) {
  // Neat!
}); */
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'rootroot'
});



//console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"

   response.end('Hello World\n');
}).listen(8081);

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
