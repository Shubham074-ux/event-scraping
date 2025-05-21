const express = require('express');
const router = express.Router();
const scrapeEvents = require('../scraper');

router.get('/', async (req, res) => {
  try {
    const events = await scrapeEvents();
    res.json(events);
  } catch (error) {
    console.error("Scraping failed:", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});



module.exports = router;
