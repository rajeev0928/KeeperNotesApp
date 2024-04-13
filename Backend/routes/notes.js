const express = require('express')
const {
    getNotes,
    addNote,
    deleteNote
} = require('../controllers/notesControllers')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

router.get("/",getNotes);

router.post("/delete",deleteNote);

router.post("/",addNote);

module.exports = router