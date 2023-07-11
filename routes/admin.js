const path = require('path');

const express = require('express');

const productcontroller = require('../controllers/products');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productcontroller.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productcontroller.postAddproduct);

module.exports=router;
