var express = require('express');
var app=express();
var middleware=require('./middleware');

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send("about us");
});

app.use(express.static(__dirname+'/public'));

app.listen(8000,function(){
    console.log('Express Server Started');
});

