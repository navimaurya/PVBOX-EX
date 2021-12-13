const express = require('express');
const authController = require('./../controller/authController');
const viewController = require('./../controller/viewController');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve('/client/build/index.html'))
});


module.exports = app;