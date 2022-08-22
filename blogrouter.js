var express = require('express')
var router = express.Router()
var mongo = require('./classjs.js')

router.use((req, res, next) => {
    console.log("route initated ")
    next()
})

router.get("/blogs", (req, res) => {
    var ss=[]
    mongo.init()
    var s=mongo.find(mongo.db)
    s.toArray(function (err, re) {
        if (err) throw err;
        res.send( re)
    })
})

router.get("/blogs/:name", (req, res) => {
    var ss=[]
    mongo.init()
    var s=mongo.findbyid(mongo.db,req.params.name)
    s.toArray(function (err, re) {
        if (err) throw err;
        res.send( re)
    })
})

router.patch("/blogs/:name", (req, res) => {
    var body=req.body
    mongo.init()
    var s=mongo.update(mongo.db,req.params.name,{$set:body})
    res.send("updated")
    
})

router.delete("/blogs/:name", (req, res) => {
    mongo.init()
    var s=mongo.delete(mongo.db,req.params.name)
    res.send("Deleted Sucessfully")
    
})

router.post("/blogs", (req, res) => {
    console.log(req.body)
    mongo.init()
    mongo.save(mongo.db, req.body)
    res.send("blog added")
})

module.exports = router