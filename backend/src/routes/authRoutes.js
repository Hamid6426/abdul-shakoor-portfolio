const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.get('/check', authController.checkAuth);

module.exports = router;
