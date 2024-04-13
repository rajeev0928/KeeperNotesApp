const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose");
const notes = require('./routes/notes');
const users = require('./routes/user');
const cors =require("cors")
const app = express();

 app.use(cors());
app.use(express.json());
app.use('/notes', notes);
app.use('/users', users);

mongoose.connect(process.env.MONGO_URI);

<<<<<<< HEAD
mongoose.connect("mongodb+srv://user-1:123@rajeev.ojmvlci.mongodb.net/");

app.listen(4000,()=>{
=======
app.listen(process.env.PORT,()=>{
>>>>>>> 1005247 (Login/Signup added)
    console.log("Server is up and running")
});
