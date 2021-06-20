const {sequelize} = require('sequelize')
const sequelize = new sequelize('new_db', 'root', 'root', {
    host: '192.168.1.9',
    dialect:'mssql',
    port: 1433 ,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
  },
  });

module.exports = sequelize;