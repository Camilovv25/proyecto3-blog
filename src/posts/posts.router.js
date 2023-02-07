const postsServices = require('./posts.services')

const router = require('express').Router()

router.get('/posts', postsServices.getAllPosts)
router.get('/posts/:id', postsServices.getPostById)
router.post('/posts', postsServices.postNewPost)
router.patch('/posts/:id', postsServices.patchPost)
router.delete('/posts/:id', postsServices.deletePost)

module.exports = router