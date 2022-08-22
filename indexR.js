var express = require('express')
var app=express()
app.use(express.json())

var blogrouter=require('./blogrouter.js')

app.use("/blog",blogrouter)


var server= app.listen(5055,function(){
    var host=server.address().address;
    var port = server.address().port;
    console.log("Server running at http://"+host+":"+port);
})