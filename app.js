require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const routes = require('./routes/AuthRoutes')
mongoose.connect('mongodb://localhost:27017/userCredentials');
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
});
db.once('open', () => {
    console.log("Connection created Successfully");
})

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(routes);

app.listen(3000, function () {
    console.log("Server started at port 3000");
})