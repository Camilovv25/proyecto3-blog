const { clearConfigCache } = require('prettier')
const Posts = require('../models/posts.models')

const findAllPosts = async() => {
    //? Your code here:
    const data = await Posts.findAll()
    return data
}

const findPostById = async(id) => {
    //? Your code here:
    const data = await Posts.findOne({
        where: {id}
    })
    return data 
}

const createPost = async(postObj) => {
    //? Your code here:
    const newPost = {
        content:  postObj.content,
        userName: postObj.userName,
        isPuclished: postObj.isPuclished
    }
    const data = await Posts.create(newPost)
    return data
}

const updatePost = async(id, postObj) => {
    //? Your code here:
    const data = await Posts.update(postObj,{
        where: {id}
    })
    console.log(data)
    return data
}

const deletePost = async(id) => {
    //? Your code here:
    const data = await Posts.destroy({
        where: {id}
    })
    console.log(data)
    return data 
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
