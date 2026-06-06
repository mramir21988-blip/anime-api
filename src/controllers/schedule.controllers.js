const getSchedule = async (req, res) => {
  try {
    res.json({
      success: true,
      results: [
        { day: "Monday", anime: [] },
        { day: "Tuesday", anime: [] },
        { day: "Wednesday", anime: [] },
        { day: "Thursday", anime: [] },
        { day: "Friday", anime: [] },
        { day: "Saturday", anime: [] },
        { day: "Sunday", anime: [] }
      ]
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

module.exports = { getSchedule }
