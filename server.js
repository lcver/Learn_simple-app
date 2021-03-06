// ini namanya denpedensi
const express = require('express');

const app = express();

// set tampilan mesin untuk nodejs
app.set('view engine', 'ejs');

app.use(express.static('public'))

// membuat router untuk "/" dan render file 'index.ejs' ke browser
app.get("/", function (req, res) {
    res.render("index")
})

app.get('/profile', function (req, res) {
    var title = "Halaman Profil"
    res.render("profile", {
        title: title
    })
})

app.get('/contact', function (req, res) {
    res.render("contact")
})

// nyalain server
app.listen(3000, function () {
    console.log('Server berjalan diport 3000');
})