const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

router.post('/', async (req, res) => {
    // TODO: create a new trip
})

router.delete('/:id', async (req, res) => {
    // TODO: delete a trip
})


module.exports = router;