const express = require('express');
const { customerSchemas,getData } = require('../controller/customersc');
const { dataSchema, getOneData} = require('../controller/productsc')
const router = express.Router();
router.post('/create',customerSchemas);
router.get('/getdata',getData)
router.post('/createProduct',dataSchema);
router.get('/singleProduct',getOneData);
module.exports = router;