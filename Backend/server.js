const express = require("express");

const mongoose = require("mongoose");
const notes = require('./routes/notes')

const cors =require("cors")
const app = express();

app.use(cors());
app.use(express.json());
app.use('/notes', notes);


mongoose.connect("mongodb+srv://admin-Rajeev:Ra.*11@rajeev.ojmvlci.mongodb.net/notesdb");

app.listen(4000,()=>{
    console.log("Server is up and running")
});
