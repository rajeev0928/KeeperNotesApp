const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title:String,
    content:String
});

module.exports =  mongoose.model("Note",itemSchema);