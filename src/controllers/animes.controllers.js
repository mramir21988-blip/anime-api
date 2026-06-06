const axios = require("axios")
const cheerio = require("cheerio")

const BASE_URL = process.env.SCRAPE_BASE || "https://animesalt.ac"

const getAnimes = async (req, res) => {
  try {
    const { page = 1 } = req.query
    const { data } = await axios.get(`${BASE_URL}/anime/page/${page}`, {
      headers: { "User-Agent": "Mozilla/5.0" },
      timeout: 10000
    })
    const $ = cheerio.load(data)
    const results = []

    $(".post, .item, .anime").each((i, el) => {
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
      results: { currentPage: parseInt(page), totalPages: 10, results }
    })
  } catch (error) {
    res.json({
      success: true,
      results: { currentPage: 1, totalPages: 1, results: [] }
    })
  }
}

module.exports = { getAnimes }
