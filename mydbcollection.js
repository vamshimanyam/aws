var MongoClient=require('mongodb').MongoClient

var url="mongodb://127.0.0.1:27017"
const DBNAME="blogdb"
const COLLECTIONNAME="blog"
MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    console.log("Connected");
    var dbo=db.db(DBNAME)

    // dbo.createCollection(COLLECTIONNAME, function(err,res){
    //     if(err) throw err;
    //     console.log(COLLECTIONNAME+" created")
    // })
    var doc={"blogname":"js for biginners","Author":"ASP"};
    var doc1={"blogname":"NodeJs","Author":"JOE"};
    dbo.collection(COLLECTIONNAME).insertOne(doc1,function(err,res){
        if(err) throw err;
        console.log(doc+" created")
    })
    var updatedo={
        $set:{
            Author:"Peter Joe"
        }
    }
    dbo.collection(COLLECTIONNAME).updateOne({},updatedo,function(err,res){
        if(err) throw err;
    }
    )
    dbo.collection(COLLECTIONNAME).find({}).toArray(function(err,res){
        if(err) throw err;
        for(let x of res){
        console.log(JSON.stringify(x));
    }
    });
    
})

