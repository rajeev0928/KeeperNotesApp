const note = require('../models/notesModel');
const mongoose = require('mongoose');

const addNote = async(req,res)=>{

    const anote = await new note({
        title: req.body.title,
        content : req.body.content
    });
    anote.save(); 
    res.end();
    }
    const deleteNote = async (req,res)=>{
 
    const title2 = req.body.title;
   await note.deleteOne({title : title2 });
   res.end();
    
}

const getNotes = async (req,res)=>{
    const item = await note.find({}); 

    res.status(200).json(item);
    res.end();
}

module.exports = {
    getNotes,
    addNote,
    deleteNote,
   }
