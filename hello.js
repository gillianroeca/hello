
var http = require('http'); //indicates something is a module (http-core module)
var port = process.env.PORT || 3000;

http.createServer(function (req, res){ //in module create the server (then call back function)
	res.writeHead(200, {'Content-Type': 'text/html'}); //write headers
	res.write("<h2>Hello World - how's it going? </h2>");
	res.write("My name is Gillian <br>");
	res.write("I'm from Maryland"); //write data to the page (analagous to echo in php)
	res.end(); //response objct is done
}).listen(8080);


/*
var http = require('http'); 
var adr = require('url');

http.createServer(function (req, res){  
	res.writeHead(200, {'Content-Type': 'text/html'});  
	var qobj = adr.parse(req.url, true).query;  
	var txt = qobj.id;
	res.write("The value is: " + txt);
	res.end();
}).listen(8080
*/

/*
var http = require('http'); 
var fs = require('fs'); //same as running html file directly 

http.createServer(function (req, res){  
	file ="formpage.html";
	fs.readFile(file, function(err,txt){
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write(txt);
		red.end();
	});
}).listen(8080);
*/