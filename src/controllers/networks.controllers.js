const getNetworks = async (req, res) => {
  try {
    res.json({
      success: true,
      results: [
        { id: "crunchyroll", name: "Crunchyroll", logo: "" },
        { id: "netflix", name: "Netflix", logo: "" },
        { id: "funimation", name: "Funimation", logo: "" },
        { id: "hidive", name: "HiDive", logo: "" },
        { id: "disney", name: "Disney+", logo: "" },
        { id: "hulu", name: "Hulu", logo: "" }
      ]
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

module.exports = { getNetworks }
