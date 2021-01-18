const express=require('express');
const controller=require('../controller/index')
const router=express.Router();

console.log('--------------Router Loaded---------------');

router.get('/show-listItem',controller.showListItems);

router.post('/create-listItem',controller.createListItem);

router.post('/update-listItem/:id',controller.updateListItem);

router.get('/delete-listItem/:id',controller.deleteListItem);

router.get('/search-by-title',controller.searchItemByTitle);

router.get('/search-by-priority',controller.searchItemByPriority);

module.exports=router;