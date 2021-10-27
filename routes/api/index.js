const router = require('express').Router();
const locations = require('./locations')
const travelers = require('./travelers')
const trips = require('./trips')

router.use('/location', locations)
router.use('/travelers', travelers)
router.use('/trips', trips)

module.exports = router;