const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Posts = db.define('posts', {
  id:{
    type: DataTypes.BIGINT,
    allowNull: false,  
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },  
  content: {
    type: DataTypes.TEXT,
    //defaultValue : 'This is my post content! :D',
    allowNull: false
  }, 
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    //defaultValue: 'I am Camilo, The author of this post'
  },
  isPublished: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }

})

module.exports = Posts