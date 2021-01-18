const db = require('../config/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Item = require("../models/listElement");

//To create an item and save in the To-DO List
module.exports.createListItem=function(req,res)
{
    let{title,description,date,priority}=req.body;

    Item.create({
        title,
        description,
        date,
        priority
    })
    .then(()=>{console.log('----------------Created Item sucessfully----------------------')})
    .catch(err => console.log(`Error: ${err}`));
};


//To display all the item present in the To-DO List
module.exports.showListItems=function(req,res)
{
    Item.findAll()
    .then(Items =>{console.log(Items)})
    .catch(err => console.log(`Error: ${err}`))   
};

//To update an item present in the To-DO List by passing its id as params
module.exports.updateListItem=function(req,res)
{ 
  Item.update(
    req.body,
    { where: { 
      id:req.params.id 
      }
    }
  )
  .then(Items=>{console.log('----------------Updated Item sucessfully----------------------')})
  .catch(err => console.log(`Error: ${err}`));
};

//To delete an item present in the To-DO List by passing its id as params
module.exports.deleteListItem=function(req,res)
{
    Item.destroy({
        where: {
          id: req.params.id
        },
        force: true
      })
      .then(Items=>{console.log('----------------Deleted Item sucessfully----------------------')})
      .catch(err => console.log(`Error: ${err}`));
};

//To search items present in the To-DO List by passing title queries
module.exports.searchItemByTitle=function(req,res)
{
  const query = req.query.title;
  console.log('-----------------------------')
  Item.findAll({ 
    where: {
      title: { [Op.like]: '%' + query + '%' },
    } 
  })
  .then(item => console.log(item))
  .catch(err => console.log(`Error: ${err}`));
};

//To search items present in the To-DO List by passing priority queries
module.exports.searchItemByPriority=function(req,res)
{
  const query = req.query.priority;

  Item.findAll({ 
    where: {
      priority: { [Op.like]: '%' + query + '%' },
    } 
  })
    .then(item => console.log(item))
    .catch(err => console.log(`Error: ${err}`));
};


