const express = require("express");
const router = express.Router();
const { getRandword } = require("../controllers/pos");

router.get("/:pos", getRandword);

module.exports = router;
