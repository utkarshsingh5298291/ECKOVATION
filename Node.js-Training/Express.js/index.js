var express=require('express');
//all the obj and routes in express are assigned in app value

var app=express();
//all methods in express i.e. http request rendering middleware and registering template engine

app.get('/',function(req,res){
    res.send("Hello World");
});


app.get('/user',function(req,res){
    res.send("User Dashboard");
});

//defining all the routes here

var server=app.listen(5000,function(){
    console.log("Node server is live.")
});