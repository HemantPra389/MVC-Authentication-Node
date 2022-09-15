const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController')

router.get('/', AuthController.home);
router.get('/login', AuthController.login);
router.post('/login', AuthController.postlogin);
router.get('/register', AuthController.register);
router.post('/register', AuthController.postregister)
module.exports = router;