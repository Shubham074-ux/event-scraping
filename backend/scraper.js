const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeEvents() {
  const url = 'https://www.eventbrite.com/d/australia--sydney/all-events/';
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
// console.log(data);
  const events = [];
  $('.SearchResultPanelContentEventCardList-module__eventList___2wk-D > li').each((i, el) => {
const title = $(el).find('a > h3').text().trim();
        //   console.log(title);
    const date = $(el).find('section > div > p').first().text().trim();
const venue = $(el).find('section > div > p').eq(1).text();
    const link = $(el).find('a').attr('href');

    events.push({ title,date, venue,link});
  });

// scrapeEvents()
  return events;
}
// scrapeEvents();
module.exports = scrapeEvents;

