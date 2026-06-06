const getDownload = async (req, res) => {
  try {
    const { id, season, ep } = req.query
    if (!id || !season || !ep) {
      return res.status(400).json({
        success: false,
        message: "id, season, and ep are required"
      })
    }

    res.json({
      success: true,
      message: "Download links found",
      results: [
        { quality: "1080p", url: `https://download.example.com/${id}-s${season}-e${ep}-1080p.mp4`, size: "500MB" },
        { quality: "720p", url: `https://download.example.com/${id}-s${season}-e${ep}-720p.mp4`, size: "300MB" },
        { quality: "480p", url: `https://download.example.com/${id}-s${season}-e${ep}-480p.mp4`, size: "150MB" }
      ]
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

module.exports = { getDownload }
