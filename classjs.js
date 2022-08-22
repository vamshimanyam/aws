var { MongoClient } = require("mongodb")
const DBNAME = "blogdb"
const COLLECTIONNAME = "blog"

class DbConnect {
    constructor() {
        const url = "mongodb://127.0.0.1:27017/"
        this.client = new MongoClient(url)
    }

    init() {
        var res = this.client.connect()
        console.log("connected")
        this.db = this.client.db(DBNAME)
        // console.log(this.db)
    }

    save(dbo, doc) {
        dbo.collection(COLLECTIONNAME).insertOne(doc, function (err, res) {
            if (err) throw err;
            console.log(res)
        })
    }


    find(dbo) {
        var a=dbo.collection(COLLECTIONNAME).find({})
        return a
    }

    findbyid(dbo,id) {
        var a=dbo.collection(COLLECTIONNAME).find({"Name":id})
        return a
    }

    update(dbo, doc,doc1){
        dbo.collection(COLLECTIONNAME).updateMany({"Name":doc},doc1,function(err,res){
            if(err) throw err;
            console.log(res)
        }
        )
    }

    
    delete(dbo, doc){
        dbo.collection(COLLECTIONNAME).deleteMany({"Name":doc},function(err,res){
            if(err) throw err;
            console.log(res)
        }
        )
    }
}


module.exports = new DbConnect()