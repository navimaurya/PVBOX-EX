const messageRouter = require('./messageApiRouter');
const express = require('express');
const authRouter = require('./authRouter');
const viewRouter = require('./viewRouter');
const userRouter = require('./userRouter');
const app = express();


//VIEW ROUTER
// app.use('/', viewRouter);

//API ROUTER
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', messageRouter);


//exporting router module
module.exports = app;