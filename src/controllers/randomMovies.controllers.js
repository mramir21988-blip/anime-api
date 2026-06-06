const axios = require("axios")
const cheerio = require("cheerio")

const BASE_URL = process.env.SCRAPE_BASE || "https://animesalt.ac"

const getRandomMovies = async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movies`, {
      headers: { "User-Agent": "Mozilla/5.0" },
      timeout: 10000
    })
    const $ = cheerio.load(data)
    const results = []

    $(".post, .item").slice(0, 5).each((i, el) => {
      const title = $(el).find("h2, .title").text().trim()
      const href = $(el).find("a").attr("href")
      const poster = $(el).find("img").attr("src") || $(el).find("img").attr("data-src")
      if (title) {
        results.push({
          title,
          anime_id: href ? href.split("/").filter(Boolean).pop() : "",
          poster: poster || ""
        })
      }
    })

    res.json({
      success: true,
      results: { currentPage: 1, totalPages: 1, results }
    })
  } catch (error) {
    res.json({
      success: true,
      results: { currentPage: 1, totalPages: 1, results: [] }
    })
  }
}

module.exports = { getRandomMovies }
