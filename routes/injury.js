const express = require('express')
const router = express.Router()
const models = require('../models/injury')

router.get('/injury', (req, res) => {
    models.getInjury()
        .then(injury => {
            res.json(injury)
        })
})

module.exports = router

