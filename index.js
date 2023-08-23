var http = require('http'); // creates a var for the built in http module
var url = require('url'); // creates a var for the built in url module
var dt = require('./dateandtime'); // creates a var to call the module dateandtime

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //write a response to the client

  res.write("The date and time are currently: " + dt.myDateTime()); //write a response to the client

  // res.write(req.url); // this will write the end of the url from the client request and display as html text

  var q = url.parse(req.url, true).query; // it will return a URL object with each part of the address as properties
  var txt = q.year + " " + q.month; // this text is only specific parts of the url request ... the year and month only
  
  res.write(txt);
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080