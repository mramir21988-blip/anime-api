const express = require("express")
const router = express.Router()
const { getRandomSeries } = require("../controllers/randomSeries.controllers.js")

router.get("/", getRandomSeries)

module.exports = router
