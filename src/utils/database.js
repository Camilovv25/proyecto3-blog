const {Sequelize} = require('sequelize')

const config = require('../../config')

const db = new Sequelize(config.db.development)

module.exports = db 