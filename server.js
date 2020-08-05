// ini namanya denpedensi
const express = require('express');

const app = express();

// set tampilan mesin untuk nodejs
app.set('view engine', 'ejs');

// membuat router untuk "/"
app.get("/", function (req, res) {
    res.end("Hello World")
})

// nyalain server
app.listen(3000, function () {
    console.log('Server berjalan diport 3000');
})