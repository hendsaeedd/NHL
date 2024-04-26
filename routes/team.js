const express = require('express')
const router = express.Router()
const models = require('../models/team')

router.get('/team', (req, res) => {
    models.getTeams()
        .then(teams => {
            res.json(teams)
        })
})

router.get('/team/:id', (req, res) => {
    models.getTeam(req.params.id)
        .then(team => {
            res.json(team)
        })
})

router.post('/team', (req, res) => {
    models.createTeam(req.body)
        .then(team => {
            res.json(team)
        })
})

module.exports = router