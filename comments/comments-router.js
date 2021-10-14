const router = require('express').Router()
const Comments = require("./comments-model")
const restricted = require("../auth/restricted-middleware")

router.get('/', (req, res) => {
    Comments.find()
        .then(comment => {
            res.status(200).json(comment)
        })
        .catch(err => {
            res.status(400).json({ msg: err })
        })        
})
router.get('/:id', (req, res) => {
    Comments.findById(req.params.id)
        .then(comment => {
            res.status(200).json(comment)
        })
        .catch(err => {
            res.status(400).json({ msg: err})
        })
})
router.post('/', (req, res) => {
    if (!req.body.body || !req.body.user_id || !req.body.post_id) {
        res.json({ msg : "body, user_id, post_id required"})
    }
    else {
        Comments.add(req.body)
            .then(comment => {
                res.status(200).json(comment)
            })
            .catch(err => {
                res.status(400).json({ msg: "error adding comment to server"})
            })
    }
})
router.put('/downvote/:id', restricted, (req, res) => {
    console.log("in down")
    Comments.downVote(req.params.id)
        .then(count => {
            if (count > 0)
            res.status(201).json({ msg: "successfully downvoted"})
            else
            res.status(400).json({ msg: "error downvoting"})
        })
        .catch(err => {
            res.status(500).json({ msg: "error in server"})
        })
})
router.delete('/:id', restricted, (req, res) => {
    Comments.trash(req.params.id)
        .then(count => {
            if (count) {
                res.status(200).json({ msg: "deleted" })
            }
            else {
                res.status(400).json({ msg: "error deleting" })
            }
        })
        .catch(err => {
            res.status(400).json({ msg: "error deleting post from server"})
        })
})

module.exports = router