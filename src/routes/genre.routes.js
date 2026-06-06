const express = require("express")
const router = express.Router()
const { getGenre } = require("../controllers/genre.controller.js")

router.get("/", getGenre)

module.exports = router
