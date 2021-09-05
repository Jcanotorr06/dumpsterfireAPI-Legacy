const Post = require('../models/Post')

exports.getPosts = async(req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (err) {
        console.log(err)
    }
}

exports.getSinglePost = async(req, res) => {
    try {
        const id = req.params.id
        const post = await Post.findById(id)
        res.send(post)
    } catch (err) {
        console.log(err)
    }
}

exports.addPost = async(req, res) => {
    try {
        const post = new Post({...req.body})
        res.send(post.save())
    } catch (err) {
        console.log(err)
    }
}