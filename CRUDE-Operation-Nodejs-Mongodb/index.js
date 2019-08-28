var express= require('express');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var app=express();

var Brand =require('./models/brand');

var options={
    user : 'myTester',
    pass : 'xyz123'
    
}

mongoose.connect('mongodb://localhost27017/ecommercedb', options);
var db=mongoose.connection;

//api

app.get('/',function(req,res){
    res.send('Welcome to Admin Portal');
});

app.get('/api/brands', function (req,res){
    Brand.getBrands(function (err, data){
        if(err){
            throw err;
        }
        else
        {
            res.json(data);
        }
    })
});

app.listen(3000, function(){
    console.log('The server is running at port 3000');
});