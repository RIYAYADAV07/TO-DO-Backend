const Sequelize = require('sequelize');

//Setting Postgres database connection with Sequelize
module.exports =  new Sequelize('to-do','postgres','root', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});