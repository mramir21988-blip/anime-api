const express = require("express")
const router = express.Router()
const { getCartoons } = require("../controllers/cartoons.controllers.js")

router.get("/", getCartoons)

module.exports = router
