const db = require('../data/connection')

module.exports = {
    add,
    find,
    findById,
    findComments,
    trash,
    upVotePost,
    downVotePost
}

function find() {
    return db.select("p.*", "u.username", "s.name as subreadit")
        .from("posts as p")
        .join("users as u", "p.user_id", "=", "u.id")
        .join("subbreadit as s", "s.id", "=", "p.subreadit_id" )
}
function findPostLikes(id) {
    return db.select("p.likes").from ("posts as p").where({id})
}
async function upVotePost(id) {
    let [temp] = await findPostLikes(id)
    temp.likes = temp.likes +1

    return db("posts")
        .updates({ likes: temp.likes })
        .where({ id })
}
async function downVotePost(id) {
    let [temp] = await findPostLikes(id)
    temp.likes = (temp.likes -1)
    return db("posts")
        .updates({ likes: temp.likes })
        .where({ id })
}

function findById(id) {
    return db.select("p.*", "u.username", "s.name as subreadit")
        .from("posts as p")
        .join("users as u", "p.user_id", "=", "u.id")
        .join("subreadit as s", "s.id", "=", "p.subreadit_id")
        .where("p.id", "=", id)
        .first()
}

function findById() {
    return db.select("c.*", "u.username")
        .then(ids => {
            return findById(ids[0])
        })
}

function trash(id) {
    return db("posts").del().where({ id })
}