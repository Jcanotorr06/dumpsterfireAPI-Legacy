const postController = require('../controller/postController')

const Post = {
    type: 'object',
    properties: {
        _id: {type: 'string'},
        title: {type: 'string'},
        body: {type: 'string'},
        createdAt: {type: 'string'}
    }
}

const routes = [
    {
        method: 'GET',
        url: '/api/posts',
        handler: postController.getPosts,
        schema: {
            response: {
                200: {
                    type: 'array',
                    items: Post
                }
            }
        }
    },
    {
        method: 'GET',
        url: '/api/posts/:id',
        handler: postController.getSinglePost,
        schema: {
            response: {
                200: Post
            }
        }
    },
    {
        method: 'POST',
        url: '/api/posts',
        handler: postController.addPost,
        schema: {
            body: {
                type: 'object',
                required: ['title', 'body'],
                properties: {
                    title: {type: 'string'},
                    body: {type: 'string'}
                }
            },
            response: {
                200: Post
            }
        }
    },
]


module.exports = routes