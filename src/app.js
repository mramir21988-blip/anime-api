/**
 * @desc    All Required Imported Functions, Packages and Modules
 */
const home = require("./routes/home.routes.js")
const search = require("./routes/search.routes.js")
const newAddedEpisode = require("./routes/newnewAddedEpisode.routes.js")
const episode = require("./routes/episode.routes.js")
const info = require("./routes/info.routes.js")
const moviesInfo = require("./routes/movieStream.routes.js")
const movies = require("./routes/movies.routes.js")
const stream = require("./routes/stream.routes.js")
const series = require("./routes/series.routes.js")

// NEW: Missing routes
const altStream = require("./routes/altstream.routes.js")
const genre = require("./routes/genre.routes.js")
const languages = require("./routes/languages.routes.js")
const networks = require("./routes/networks.routes.js")
const schedule = require("./routes/schedule.routes.js")
const animes = require("./routes/animes.routes.js")
const cartoons = require("./routes/cartoons.routes.js")
const randomSeries = require("./routes/randomSeries.routes.js")
const randomMovies = require("./routes/randomMovies.routes.js")
const download = require("./routes/download.routes.js")

const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

/**
 * @desc    All Routes
 * @access  Public
 */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: {
      Documentation: "For Documentation prefer to this repository https://github.com/mramir21988-blip/anime-api.git"
    }
  })
})

// Core routes
app.use("/api", home)
app.use("/api/search", search)
app.use("/api/newadded", newAddedEpisode)
app.use("/api/info", info)
app.use("/api/episode", episode)
app.use("/api/movie", moviesInfo)
app.use("/api/movies", movies)
app.use("/api/series", series)
app.use("/api/stream", stream)

// NEW: Aliases and missing routes
app.use("/api/episodes", episode)           // alias for /api/episode
app.use("/api/alt-stream", altStream)       // alt stream with hyphen
app.use("/api/altstream", altStream)        // alt stream without hyphen
app.use("/api/genre", genre)
app.use("/api/languages", languages)
app.use("/api/networks", networks)
app.use("/api/schedule", schedule)
app.use("/api/animes", animes)
app.use("/api/cartoons", cartoons)
app.use("/api/random-series", randomSeries)
app.use("/api/random-movies", randomMovies)
app.use("/api/download", download)
app.use("/api/downloads", download)         // alias plural

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  })
})

/**
 * @desc    Global Error Handling Middleware
 */
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error"
  })
})

module.exports = app
