const Post = require('../models/Post')

exports.getPosts = async(req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (err) {
        res.send(err)
    }
}

exports.getSinglePost = async(req, res) => {
    try {
        const id = req.params.id
        const post = await Post.findById(id)
        res.send(post)
    } catch (err) {
        res.send(err)
    }
}

exports.addPost = async(req, res) => {
    try {
        const post = new Post({...req.body})
        res.send(post.save())
    } catch (err) {
        res.send(err)
    }
}