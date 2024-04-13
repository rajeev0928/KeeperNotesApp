const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title:String,
    content:String,
    user_id:{
        type :String,
        required : true 
    }
});

module.exports =  mongoose.model("Note",itemSchema);