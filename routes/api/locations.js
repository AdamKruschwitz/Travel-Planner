const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router.get('/', async (req, res) => {
    // TODO: return all location data in insomnia
})

router.get('/:id', async (req, res) => {
    // TODO: return location data for single location
    // include associated trips
})

router.delete('/:id', async (req, res) => {
    // TODO: delete a location
    // include associated trips
})

router.post('/', async (req, res) => {
    // TODO: create a new location
})

module.exports = router;