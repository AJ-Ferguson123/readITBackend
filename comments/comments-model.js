const db = require('../data/connection')
const { findBy } = require('../users/users-model')

module.exports = {
    add,
    find,
    findById,
    upVote,
    downVote,
    trash
}

function find() {
    return db.select("c.*", "u.username")
        .from("comments as c")
        .join("users as u", "u.id", "=", c.user_id)
}
function findById(post_id) {
    return db.select("c.*", "u.username")
        .from("comment as c")
        .join("users as u", "u.id", "=", "c.user_id")
        .where({ post_id })
}
function add(comment) {
    return db.select("comments").insert(comment, "id")
        .then(ids => {
            return findBy(comment.post_id)
        })
}
function trash(id) {
    return db.select("comments").del().where({id})
}
function findCommentLikes(id) {
    return db.select("c.likes").from("comments as c").where({id})
}

async function upVote(id) {
    let [temp] = await findCommentLikes(id)
    temp.likes = temp.likes + 1
    return db("comments").update({ likes: temp.likes}).where({id})
}
async function upVote(id) {
    let [temp] = await findCommentLikes(id)
    temp.likes = temp.likes - 1
    return db("comments").update({ likes: temp.likes}).where({id})
}
