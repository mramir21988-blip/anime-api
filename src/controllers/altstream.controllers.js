const getAltStream = async (req, res) => {
  try {
    const { id, season, ep } = req.query
    if (!id || !season || !ep) {
      return res.status(400).json({
        success: false,
        message: "id, season, and ep are required"
      })
    }

    // Return same format as stream but mark as alt
    res.json({
      success: true,
      message: "Alt Stream Found!!",
      results: [
        { server: "alt-1", embed: `https://as-cdn21.top/video/alt-${id}-s${season}-e${ep}` },
        { server: "alt-2", embed: `https://backup.example.com/${id}-s${season}-e${ep}` }
      ]
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

module.exports = { getAltStream }
