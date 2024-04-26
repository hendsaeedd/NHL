const express = require('express')
const db = require('./config/db')
const teamRouter = require('./routes/team')
const playerRouter = require('./routes/player')
const gamesRouter = require('./routes/games')
const injuryRouter = require('./routes/injury')


const app = express()
const port = 3000

const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', teamRouter)
app.use('/', playerRouter)
app.use('/', gamesRouter)
app.use('/', injuryRouter)


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
    db.connect((err) => {
        if (err) {
            throw err
        }
        console.log('Connected to database')
    })
})