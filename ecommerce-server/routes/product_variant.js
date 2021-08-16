const express = require("express");
const router = express.Router();
const Product_Variant = require("../controllers/product_variant");


router.post('/create', Product_Variant.create)

module.exports = router;