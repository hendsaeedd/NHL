const express = require('express')
const router = express.Router()
const models = require('../models/games')

router.get('/games', (req, res) => {
    models.getGames()
        .then(games => {
            res.json(games)
        })
})

module.exports = router