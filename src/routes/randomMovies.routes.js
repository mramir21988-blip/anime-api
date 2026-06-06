const express = require("express")
const router = express.Router()
const { getRandomMovies } = require("../controllers/randomMovies.controllers.js")

router.get("/", getRandomMovies)

module.exports = router
