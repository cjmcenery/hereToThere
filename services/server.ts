// const { MongoClient } = require("mongodb");
// const connectionString = process.env.ATLAS_URI;
// const client = new MongoClient(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let dbConnection:any;

// export function connectToServer(callback:any) {
//     client.connect(function (err:any, db:any) {
//       if (err || !db) {
//         return callback(err);
//       }

//       dbConnection = db.db("users");
//       console.log("Successfully connected to MongoDB.");

//       return callback();
//     });
//   }

// export function getDb() {
//     client.connect(function (err:any, db:any) {
//         if (err || !db) {
//           return err;
//         }
  
//         dbConnection = db.db("users");
//         console.log("Successfully connected to MongoDB.");
  
//         return ;
//       });
//     return dbConnection;
//   }


