var express = require('express')
var app=express()
app.use(express.json())
app.get("/", function(req, res) {
    res.send("Hello from Server!")
})
app.get("/get", function(req, res) {
    res.send("Hello from Server11")
})
// app.get("/get/:name/:age", function(req, res) {
//     var name = req.params.name
//     var age = req.params.age
//     console.log(name,age)s
//     res.send(req.params)
// })
app.get("/get/:name/:age", (req, res,next)=> {
    var name = req.params.name
    var age = req.params.age
    console.log(name,age)
    next()
},(req,res)=>{
    res.send("request processed successfully")
})
app.post("/", function(req, res) {
    res.send("Post request Processed")
    var name=req.body.Name
    var age=req.body.Age
    console.log(name, age)
    console.log(req.body)
})
app.put("/", function(req, res) {
    res.send('put request Processed')
})
app.patch("/", function(req, res) {
    res.send('patch request Processed')
})
app.delete("/", function(req, res) {
    res.send('delete request Processed')
})


var server= app.listen(5055,function(){
    var host=server.address().address;
    var port = server.address().port;
    console.log("Server running at http://"+host+":"+port);
})