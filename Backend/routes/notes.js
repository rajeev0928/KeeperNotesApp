const express = require('express')
const {
    getNotes,
    addNote,
    deleteNote
} = require('../controllers/notesControllers')

const router = express.Router()

router.get("/",getNotes);

router.post("/delete",deleteNote);

router.post("/",addNote);

module.exports = router