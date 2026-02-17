const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send("This is the words page");
})

router.get('/wotd', (req, res) => {
    res.send("word of the day");
})

module.exports = router