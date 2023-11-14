var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";

// var db = MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//     console.log("Database created!");
//     db.close();
// });

var db = MongoClient.connect(url);

MongoClient.connect(url)
.then((connectedClient) => {
    client = connectedClient;
    const dbo = client.db("mydb");
    return dbo.createCollection("employee");
})
.then((res) => {
    console.log("Collection created!");
    client.close();
})
.catch((err)=> {
    console.error("error: ",err);
});