const express = require("express");
const router = express.Router();
const Product_Variant = require("../controllers/product_variant");


router.get('/findAll', Product_Variant.findAll)
router.get('/findAllDistinct', Product_Variant.findAllDistinct)
router.get('/getProductVariant/:id', Product_Variant.getProductVariant);
router.get('/getProductVariants/:id', Product_Variant.getProductVariants);
router.post('/create', Product_Variant.create)

module.exports = router;