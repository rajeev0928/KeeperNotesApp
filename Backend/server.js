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


mongoose.connect("mongodb+srv://user-1:123@rajeev.ojmvlci.mongodb.net/");

app.listen(process.env.PORT,()=>{

    console.log("Server is up and running")
});
