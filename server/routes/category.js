const express = require("express");
const router = express.Router();
const Category = require("../controllers/category");


router.post('/create', Category.create)

module.exports = router;