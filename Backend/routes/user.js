const express = require("express");
const router = new express.Router();
const userController = require('../controllers/user.js');
router.post('/register', userController.registerUser);
router.post("/login", userController.loginUser);
module.exports = router;