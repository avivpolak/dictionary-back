const express = require("express");
const router = express.Router();
const { getRandword ,getOptionsForRandom} = require("../controllers/pos");


router.get("/options", getOptionsForRandom);
router.get("/:pos", getRandword);

module.exports = router;
