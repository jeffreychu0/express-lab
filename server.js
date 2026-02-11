const express = require('express');
const app = express();

app.set('view engine', 'ejs')

// If this is HTML, this needs to be this

// const path = require('path'); // Import path module
// app.engine('html', require('ejs').renderFile);  // Enables .html rendering
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');  // Sets .html as the default extension

app.get('/', (req, res) => {
    console.log("Here");
    // res.send('Hi');
    // res.send('<h2>Hello World!</h2>')
    
    res.render('index', {userName: 'Jeffrey'}) //TODO figure out why this does not work
});

app.get('/potato', (req, res) => {
    res.send('<p>Here are your potatoes</p>')
});

app.get('/status', (req, res) => {
    // res.sendStatus(500);
    // res.status(500).send("Hi")
    res.status(500).json( {message: "Error"} );
});

// We can keep on adding app.get, but itll get long and messy

// instead, we can use subroutes

// For instance, lets say we have these two app.get below

app.get('/users', (req, res) => {
    res.send('User List')
})

app.get('/users/new', (req, res) => {
    res.send('User New Form')
})

// since both of these are related to users, we can create a subroute.

app.listen(3030);
