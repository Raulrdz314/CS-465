// app_server/routes/travel.js

const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/travel');

router.get('/', ctrlTravel.travelList);
router.get('/travel', ctrlTravel.travelList);

//  API route
router.get('/api/trips', ctrlTravel.tripsList);

module.exports = router;
