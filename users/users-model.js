const { filter } = require('@chakra-ui/styled-system')
const db = require('../data/connection')

module.exports = {
    add,
    find,
    findBy,
    findById
}

function find() {
    return db('users')
}
function findBy() {
    return db('users').where(filter)
}
function findById() {
    return db('users').where({id}).first()
}
function add() {
    return db('users').insert(user, "id")
        .then(ids => {
            return findById(ids[0])
        })
}