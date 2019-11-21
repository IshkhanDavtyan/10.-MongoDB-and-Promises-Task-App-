// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const fs = require('fs')

const data = fs.readFileSync('notes.json')

console.log(data)

// const {MongoClient,ObjectID} = require('mongodb')

// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager';




// MongoClient.connect(connectionURL,{ useUnifiedTopology: true },(error,client)=>{
//     if(error){
//        return console.log('unable to connect to database')
//     }

//     const db = client.db(databaseName)

    
//       db.collection('users').insertOne({
//         name:'Ishkhan'
//       }).then((result)=>{
//           console.log(result)
//       }).catch((error)=>{
//         console.log(error)
//       })


// })
