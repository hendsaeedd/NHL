const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config() 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'nhl'
})

// db.connect((err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Connected to database')
// })


module.exports = db