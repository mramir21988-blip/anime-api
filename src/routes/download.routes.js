const express = require("express")
const router = express.Router()
const { getDownload } = require("../controllers/download.controllers.js")

router.get("/", getDownload)

module.exports = router
