var express = require("express");
var app = express();
var request = require("request");
//for looking through al ejs
app.set("view engine", "ejs");

//route for the search
app.get("/", function(req, res){
   res.render("search"); 
});

app.get("/request", function(req, res){
    //capture the value from the get request form
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=8d41a193&s="+query;
    //request for google
   request(url,function(error, response, body){
       if(!error && response.statusCode === 200){
           //parsing into an json object
           var data = JSON.parse(body);
           res.render( "result", {data:data} );
       }
   });
});



app.listen(3000, function(){
    console.log("MOVIE APP HAS BEEN STARTED");
    
});
