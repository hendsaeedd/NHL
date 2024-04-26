const express = require('express')
const router = express.Router()
const models = require('../models/player')

router.get('/player', (req, res) => {
    models.getPlayers()
        .then(players => {
            res.json(players)
        })
})

router.post('/player', (req, res) => {
    models.addPlayer(req.body)
        .then(player => {
            res.json(player)
        })
})

module.exports = router