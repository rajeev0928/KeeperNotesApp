const note = require('../models/notesModel');
const mongoose = require('mongoose');

const addNote = async(req,res)=>{
    const id  = req.user._id
    const anote = await new note({
     
        title: req.body.title,
        content : req.body.content,
        user_id : id
    });

    anote.save(); 
    res.end();
    }
    const deleteNote = async (req,res)=>{
 
    const title2 = req.body.title;


    console.log(req.body._id);

   await note.deleteOne({title : title2 });
   res.end();
    
}

const getNotes = async (req,res)=>{
    const id  = req.user._id
    const item = await note.find({user_id:id}); 
    res.status(200).json(item);
    res.end();
}

module.exports = {
    getNotes,
    addNote,
    deleteNote,
   }
