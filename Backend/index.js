const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user.js');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const connectDb = async() =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/applemusic");
}
app.use('/api/v1/user',userRoute);
connectDb()
.then(()=>console.log("MongoDb Connected Succesfully"))
.catch(()=>console.log("Error Connecting MongoDb"))
const portNo = 5000;
app.listen(portNo,()=>{
    console.log("Server is up and running on port", portNo);
})