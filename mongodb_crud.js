var { MongoClient, ObjectID } = require("mongodb");
var url = "mongodb://127.0.0.1:27017/";

// generate unique id
// const id=new ObjectID();
// console.log(id,id.getTimestamp());

// connection node.js to mongodb

MongoClient.connect(url, (err, db) => {
    if (err)
        console.log(err);
    else {
        console.log("connected");
        const database = db.db("admin");
        database.createCollection("student12", (err, res) => {
            if (err) {
                console.log("collecion exists");
                db.close();
            }
            else {
                console.log("collection created");
                db.close();
            }
        });

    }
});


// insert One

// MongoClient.connect(url, (err, db) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log("connected");
//         const database = db.db("admin");
//         const obj = { name: "max", age: 23 };
//         database.collection("student").insertOne(obj, (err, res) => {
//             if (err)
//                 console.log("not inserted");
//             else
//                 console.log("inserted successfully");
//             db.close();
//         });
//     }
// });


// insertMany

// MongoClient.connect(url, (err, db) => {
//     if (err)
//         console.log(err0)
//     else {
//         console.log("connected");
//         const database = db.db("admin");
//         var myobj = [
//             { name: 'John', address: 'Highway 71' },
//             { name: 'Peter', address: 'Lowstreet 4' },
//             { name: 'Amy', address: 'Apple st 652' },
//             { name: 'Hannah', address: 'Mountain 21' },
//             { name: 'Michael', address: 'Valley 345' },
//             { name: 'Sandy', address: 'Ocean blvd 2' },
//             { name: 'Betty', address: 'Green Grass 1' },
//             { name: 'Richard', address: 'Sky st 331' },
//             { name: 'Susan', address: 'One way 98' },
//             { name: 'Vicky', address: 'Yellow Garden 2' },
//             { name: 'Ben', address: 'Park Lane 38' },
//             { name: 'William', address: 'Central st 954' },
//             { name: 'Chuck', address: 'Main Road 989' },
//             { name: 'Viola', address: 'Sideway 1633' }
//         ];
//         database.collection("student1").insertMany(myobj, (err, res) => {
//             if (err)
//                 console.log("not inserted")
//             else
//                 console.log("inserted successfully",res.insertedIds[0]);
//             db.close();
//         })
//     }
// })



// // findOne method to get data from database

// MongoClient.connect(url, (err, db) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log("connected");
//         const database = db.db("admin");
//         database.collection("student1").findOne({ name: "John" }, (err, res) => {
//             if (err)
//                 console.log("unable to fetch data");
//             else {
//                 console.log(res);
//             }
//             db.close()
//         })
//     }
// });


// // find method to get duplicate data from database

// MongoClient.connect(url, (err, db) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log("connected");
//         const database = db.db("admin");
//         database.collection("student1").find({ name: "John" }).toArray((err, res) => {
//             if (err)
//                 console.log("unable to fetch data");
//             else {
//                 console.log(res);
//             }
//             db.close()
//         })
//     }
// });




// // updateOne method to update one data from database

// MongoClient.connect(url, (err, db) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log("connected");
//         const database = db.db("admin");
//         database.collection("student1").updateOne({ _id: ObjectID('62bee70432f8adf2dacf4f78') }, { $set: { name: "mike" } })
//             .then((result) => console.log(result)).catch((err) => console.log(err));
//     }
// });



// // updateMany method to update multiple data from database

// MongoClient.connect(url, (err, db) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log("connected");
//         const database = db.db("admin");
//         database.collection("student1").updateMany({ name:"mike" }, { $set: { name: "Harry" } })
//             .then((result) => console.log(result)).catch((err) => console.log(err));
//     }
// });




// // deleteMany method to delete multiple data from database

// MongoClient.connect(url, (err, db) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log("connected");
//         const database = db.db("admin");
//         database.collection("student1").deleteMany({ name:"Harry" })
//             .then((result) => console.log(result)).catch((err) => console.log(err));
//     }
// });




// // deleteOne method to delete single data from database

// MongoClient.connect(url, (err, db) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log("connected");
//         const database = db.db("admin");
//         database.collection("student1").deleteOne({ name:"Amy" })
//             .then((result) => console.log(result)).catch((err) => console.log(err));
//     }
// });


