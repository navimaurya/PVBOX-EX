const messageController = require('./../controller/messageController');
const authController = require('./../controller/authController');
const express = require('express');
const router = express.Router();

// Protecting router ALl the routs AND Restricting to the users
router.use(authController.protect);
//Protected routs
router.post('/send', authController.isReceiverUse, messageController.send)
    .post('/receive', messageController.receive)
    .get('/sync', messageController.sync)
    .get('/new', messageController.newMssages)
    .get('/chatlist', messageController.chstList);

module.exports = router;