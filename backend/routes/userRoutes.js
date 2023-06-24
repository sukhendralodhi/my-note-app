const express = require('express');
const { registerUser } = require('../controllers/userControllers');
const router = express.Router();


/* GET home page. */
router.route('/').post(registerUser);

module.exports = router;