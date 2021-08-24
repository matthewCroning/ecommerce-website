const express = require("express");
const router = express.Router();
const Auth = require("../controllers/auth");

router.post('/create', Auth.create)
router.get('/check', Auth.checkAuthentication)
module.exports = router;
