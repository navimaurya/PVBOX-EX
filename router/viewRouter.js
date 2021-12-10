const express = require('express');
const authController = require('./../controller/authController');
const viewController = require('./../controller/viewController');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("HELLO")
});


module.exports = app;