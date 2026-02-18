const express = require('express')
const router = express.Router();

// destructuring: only taking one element that we need from a library
const {readFile} = require('fs').promises;

router.get('/', (req, res) => {
    res.send("This is the words page");
})

router.get('/wotd', async (req, res) => {
    // let wotd = await getWordFromDictionary();
    let [word, speech, definition] = await getWordFromDictionary();
    res.render("wotd", { word: word, speech: speech, definition: definition });
})

let getWordFromDictionary = async () => {
    
    const data = await readFile('./resources/allwords.txt', 'utf-8');
    
    let lines = data.split('\n');
    let randomNumber = parseInt(Math.random() * lines.length);
    let randomLine = lines[randomNumber];
    let wordArray = randomLine.split('\t')

    console.log(wordArray)
    return wordArray
};

module.exports = router
