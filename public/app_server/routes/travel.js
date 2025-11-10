// app_server/routes/travel.js

const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/travel');

// main travel page
router.get('/', ctrlTravel.travelList);
router.get('/travel', ctrlTravel.travelList);

module.exports = router;
