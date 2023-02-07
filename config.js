require('dotenv').config()

const configs = {
  api: {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
    host: process.env.HOST
  },

  db:{
    development:{
      dialect: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: process.env.PASSWORD,
      port: 5432,
      database: 'project-3',
      define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true 
      },

    },

    test:{

    },
    production: {

    }
  }
}

module.exports = configs