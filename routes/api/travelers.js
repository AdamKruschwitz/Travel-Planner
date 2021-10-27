const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router.get('/', async (req, res) => {
    // TODO: return all traveler data in insomnia
})

router.get('/:id', async (req, res) => {
    // TODO: return traveller data for single traveller
    // includes associated trips
})

router.delete('/:id', async (req, res) => {
    // TODO: delete a traveller
    // includes associated trips
})

router.post('/', async (req, res) => {
    // TODO: create a new traveller
})

module.exports = router;