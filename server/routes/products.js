const express = require("express");
const router = express.Router();
const Products = require("../controllers/products");

router.get('/findAll', Products.findAll)
router.get('/getProduct/:id', Products.getProduct)
router.get('/findlike/:searchInput/:columnFilter', Products.findLike)

router.post('/create', Products.create)
router.post('/update', Products.update)
router.post('/delete', Products.delete)

module.exports = router;
