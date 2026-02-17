const express = require('express');
const app = express();
const userRouter = require("./routes/users")
const wordsRouter = require("./routes/words")

app.set('view engine', 'ejs')
// If using HTML, need to use this to override ejs requirement
// const path = require('path'); // Import path module
// app.engine('html', require('ejs').renderFile);  // Enables .html rendering
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');  // Sets .html as the default extension

app.use(express.static("public"));
app.use('/users', userRouter);
app.use('/words', wordsRouter);

app.get('/', (req, res) => {
    console.log("Here");

    // additional app.get and res scripts
    // app.get('/potato', (req, res) => {
    //     res.send('<p>Here are your potatoes</p>')
    // });

    // app.get('/status', (req, res) => {
    //     // res.sendStatus(500);
    //     // res.status(500).send("Hi")
    //     res.status(500).json( {message: "Error"} );
    // });
    // res.send('<h2>Hello World!</h2>')
    
    res.render('index', {userName: 'Jeffrey'}) //TODO figure out why this does not work
});


app.listen(3030);
