const express = require("express")
const router = express.Router()
const { getNetworks } = require("../controllers/networks.controllers.js")

router.get("/", getNetworks)

module.exports = router
