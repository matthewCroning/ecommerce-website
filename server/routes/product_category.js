const express = require("express");
const router = express.Router();
const Product_Category = require("../controllers/product_category");


router.post('/create', Product_Category.create)

module.exports = router;