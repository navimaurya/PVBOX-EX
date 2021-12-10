const express = require('express');
const io = require('socket.io')(5000)
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')
require('path');

const AppError = require("./utils/appError");
const messageApp = require('./messageApp');
const mongoose = require('mongoose');


// Configuraton of environment
dotenv.config({ path: "./config.env" });
// DataBase configuration
require('./supports/database').database();
// const db = mongoose.connection;
// db.once('open', () => {
//     const message = db.collection('messages');
//     const changeStream = message.watch();
//     changeStream.on('change', (change) => {
//         console.log(change);
//     })
// })

//Starting Express app
const app = express();
io.on('connection', socket => {
    console.log(socket.id);
})
app.use(cors());

//Setting view engine for web
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');


//message app API module
app.use(messageApp)

//Starting app
port = process.env.PORT || 5000
app.listen(port, "0.0.0.0", (err) => {
    if (err) {
        return console.log("Somthing went wrong");
    }
    console.log("Server is started! in %s", process.env.ENV)
    console.log(`link is http://localhost:${port}`);
})

// mongodb + srv://navi:<password>@cluster0.muobv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority 