const getLanguages = async (req, res) => {
  try {
    res.json({
      success: true,
      results: [
        { code: "hi", name: "Hindi", flag: "🇮🇳" },
        { code: "en", name: "English", flag: "🇬🇧" },
        { code: "jp", name: "Japanese", flag: "🇯🇵" },
        { code: "ta", name: "Tamil", flag: "🇮🇳" },
        { code: "te", name: "Telugu", flag: "🇮🇳" },
        { code: "ml", name: "Malayalam", flag: "🇮🇳" },
        { code: "kn", name: "Kannada", flag: "🇮🇳" },
        { code: "bn", name: "Bengali", flag: "🇮🇳" },
        { code: "mr", name: "Marathi", flag: "🇮🇳" },
        { code: "ko", name: "Korean", flag: "🇰🇷" },
        { code: "zh", name: "Chinese", flag: "🇨🇳" }
      ]
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

module.exports = { getLanguages }
