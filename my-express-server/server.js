const express = require("express");

const app = express();

app.get("/", function(request, response){
	response.send("<h1>The sky is the limit</h1>");
});

app.get("/contact", function(req, res){
	res.send("Contact me at asifmahmud3472@gmail.com");
})

app.get("/about", function(req, res){
	res.send("<h2>Hello, I am Asif Mahmud</h2>");
});

app.listen(3000, function(){
	console.log("Server started on port 3000");
});