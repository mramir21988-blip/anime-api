const express = require("express")
const router = express.Router()
const { getAnimes } = require("../controllers/animes.controllers.js")

router.get("/", getAnimes)

module.exports = router
