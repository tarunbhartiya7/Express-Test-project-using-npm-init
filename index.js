var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Welcome to a simple app created using the express module");
});

var port = 4545;
app.listen(port, function(){
    console.log("Server running on port " + port);
})