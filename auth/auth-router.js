const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")
const config = require('../api/config')
const Users = require('../users/users-model')
const router = require('express').Router()
const { isValid } = require('./auth-service')


router.post('/register', (req, res) => {
    const credentials = req.body
    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8
        const hash = bcryptjs.hashSync(credentials.password, rounds)
        credentials.password = hash
        Users.add(credentials)
            .then(user => {
                res.status(201).json({ data: user })
            })
            .catch(err => {
                res.status(500).json({ msg: err.message})
            })
    }
    else {
        res.status(400).json({ msg: "error, need username and password password should be alphanumeric"})
    }
})
router.post('./login', (req, res) => {
    
})