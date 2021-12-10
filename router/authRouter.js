const authController = require('./../controller/authController');
const xp = require('express');
const router = xp.Router();

//Unprotected routs
router.post('/login', authController.login)
    .post('/signup/:signUpwith?', authController.signup)
    .get('/logout', authController.logout)
    .get('/getLoggedInUser', authController.getLoggedInUser);


module.exports = router;

