var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var controller = require('../controllers/');
const db= require('../models/')
var joi=require('../joi/joi');
var jwt=require('../jwt/jwt');


router.use(bodyParser.json({limit: '200mb',extended:true}));

router.use(bodyParser.urlencoded());
router.use('/uploads', express.static('uploads'));


/*******************************************************************************************/

router.post('/add',jwt.verifyToken,(req,res)=>{
    console.log("In Add Category");
    controller.CategoryController.addCategory(req,res,db.Category);
    });

router.get('/list',jwt.verifyToken,(req,res)=>{
    console.log("In List Category");
   controller.CategoryController.listCategory(req,res,db.Category);
    });

/*******************************************************************************************/

module.exports= router;