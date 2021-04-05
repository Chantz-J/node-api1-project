// BUILD YOUR SERVER HERE
const express = require('express')
const Users = require('./users/model')

//Server use express modules
const server = express()

//Middlware of server
server.use(express.json())

//[GET] Test req :)
server.get('/', (req, res) => {
    res.send('Hello from Express ^_^')
})

// [GET] /api/users (R of CRUD, return all users)
server.get('/api/users', (req, res) => {
    Users.find()
    .then(users => {
        console.log(users)
        res.status(200).json(dogs)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})
   




module.exports = server // EXPORT YOUR SERVER instead of {}
