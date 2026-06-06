const express = require("express")
const router = express.Router()
const { getAltStream } = require("../controllers/altstream.controllers.js")

router.get("/", getAltStream)

module.exports = router
