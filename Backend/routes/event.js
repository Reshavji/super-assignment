const express = require('express');
const router = new express.Router();
const eventController = require('../controllers/event');
router.post('/create', eventController.createEvent);
module.exports = router;