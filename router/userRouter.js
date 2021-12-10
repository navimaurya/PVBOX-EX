const userController = require('./../controller/userController');
const authController = require('./../controller/authController');
const express = require('express');
const router = express.Router();

//Protecting router
router.use(authController.protect);
router.get('/me', userController.getLoggedInUser)
    .get('/getfriendslist', userController.getFriendsList)
    .get('/getfriend', userController.getFriends);

router.post('/addcontact', userController.addContact);


module.exports = router;