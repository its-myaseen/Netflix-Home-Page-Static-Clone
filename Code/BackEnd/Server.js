const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, '..', 'views'));

// Serve static files from the correct directory
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/signin', (req, res) => {
    res.render('signin');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
