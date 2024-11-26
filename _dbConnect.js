const mongoose = require("mongoose");
const uri = "localhost:27017"


const _db = async() =>{
    try{
        mongoose.set('strictquery', true);
        const connet = await mongoose.connet("mongodb+srv://admin:<db_password>@capstone.xbnus.mongodb.net/?retryWrites=true&w=majority&appName=capstone");
        console.log("Connected to mongoDB",connect.connection.host,conect.conection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


// module.exports = _db

// const mongoose = require("mongoose");
// const uri = “localhost:27017”
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.set(‘strictQuery’, true);
//     console.log("MongoDB connected", connect.connection.host, connect.connection.name);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


// const mongoose = require("mongoose");
// const uri = "localhost:27017"

// const _db = async()=>{
//     try{
//         mongoose.set('strictQuery', true);
//         const connect = await mongoose.connect(uri);
//         console.log("Connected to MongoDB",connect.connection.host,
//         connect.connection.name);
//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }
// }

// module.exports = _db;
