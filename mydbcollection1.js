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

    var doc=[{
        "userName":"Henry O",
        "emailid":"henryomac@gmail.com",
        "blogarray":[{"blogtitle":"One fine day","blog content":"blog content","blogDate":new Date()}]
    },{
        "userName":"Peter S",
        "emailid":"peters@gmail.com",
        "blogarray":[{"blogtitle":"One fine day","blog content":"blog content","blogDate":new Date()},{"blogtitle":"One fine day","blog content":"blog content","blogDate":new Date()}]
    }
]

    // createOne(dbo,COLLECTIONNAME,doc)
    // createMany(dbo,COLLECTIONNAME,doc)
    // getAll(dbo,COLLECTIONNAME)
    // getByValue(dbo,COLLECTIONNAME,{"userName":"Henry O"})
    // updateOne(dbo,COLLECTIONNAME,{"userName":"Henry O"},{$set:{"userName":"Henry"}})
    // getByValue(dbo,COLLECTIONNAME,{"userName":"Henry"})
    // updateMany(dbo,COLLECTIONNAME,{"userName":"Henry O"},{$set:{"userName":"Henry OO"}})
    // getAll(dbo,COLLECTIONNAME)
    // deleteOne(dbo,COLLECTIONNAME,{"userName":"Henry"})
    // getAll(dbo,COLLECTIONNAME)
    deleteMany(dbo,COLLECTIONNAME,{"userName":"Henry OO"})
    getAll(dbo,COLLECTIONNAME)

})

function createOne(dbo,collection,doc){
    dbo.collection(collection).insertOne(doc,function(err,res){
        if(err) throw err;
        console.log(doc+" created")
    })
}

function createMany(dbo,collection,doc){
    dbo.collection(collection).insertMany(doc,function(err,res){
        if(err) throw err;
        console.log(doc+" created")
    })
}

function getAll(dbo,collection){
    dbo.collection(collection).find({}).toArray(function(err,res){
        if(err) throw err;
        for(let x of res){
        console.log(JSON.stringify(x));
    }
    })
}

function getByValue(dbo,collection,doc){
    dbo.collection(collection).find(doc).toArray(function(err,res){
        if(err) throw err;
        for(let x of res){
        console.log(JSON.stringify(x));
    }
    })
}

function updateOne(dbo,collection,doc,doc1){
    dbo.collection(collection).updateOne(doc,doc1,function(err,res){
        if(err) throw err;
    }
    )
}
function updateMany(dbo,collection,doc,doc1){
    dbo.collection(collection).updateMany(doc,doc1,function(err,res){
        if(err) throw err;
        console.log(res);
    }
    )
}
function deleteOne(dbo,collection,doc){
    dbo.collection(collection).deleteOne(doc,function(err,res){
        if(err) throw err;
    }
    )
}
function deleteMany(dbo,collection,doc){
    dbo.collection(collection).deleteMany(doc,function(err,res){
        if(err) throw err;
    }
    )
}