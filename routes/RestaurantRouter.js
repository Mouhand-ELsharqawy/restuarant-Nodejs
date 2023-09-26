const RestaurantController = require('../controllers/RestaurantController')
const express = require('express');
const router = express.Router();
router.get('/restaurant',(req,res)=>{
    RestaurantController.GetAll(req,res);
});
router.post('/restaurant',(req,res)=>{
    RestaurantController.Create(req,res);
});
router.get('/restaurant/:id',(req,res)=>{
    RestaurantController.FindOne(req,res);
});
router.patch('/restaurant/:id',(req,res)=>{
    RestaurantController.Update(req,res);
});
router.delete('/restaurant/:id',(req,res)=>{
    RestaurantController.Delete(req,res);
});
module.exports = router;