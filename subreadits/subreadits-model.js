const db = require('../data/connection')

module.exports = {
    find,
    findPostsByName,
    add
}

function find() {
    return db('subreadit')
}
function add() {
    return db('subreadit').insert({ name }, "id")
        .then(ids => {
            return find()
        })
}
function findPostsByName(name) {
    return db
        .select("p.*", "s.name", "u.username")
        .from("posts as p")
        .join("subreadit as s", "s.id", "=", "p.subreadit_id")
        .join("users as u", "u.id", "=", "p.user_id")
        .where("s.name", "=", name)
}