const express = require("express")
const router = express.Router()
const { getSchedule } = require("../controllers/schedule.controllers.js")

router.get("/", getSchedule)

module.exports = router
