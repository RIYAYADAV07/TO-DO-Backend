const Sequelize = require('sequelize');
const db = require('../config/database');

//Creating To-Do List table model
const Item = db.define('TO-DO LIST', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE 
  },
  priority: {
    type: Sequelize.STRING
  }
});

Item.sync().then(() => {
  console.log('---------Table Created----------');
});
module.exports = Item;