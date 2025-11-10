// app_server/controllers/travel.js

const travelList = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    tagline: 'Book your next adventure',
  });
};

module.exports = {
  travelList,
};
