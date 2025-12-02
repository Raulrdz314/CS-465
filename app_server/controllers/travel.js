const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const travelList = async (req, res) => {
  try {
    const trips = await Trip.find({}).lean();
    res.render('travel', {
      title: 'Travlr Getaways',
      tagline: 'Book your next adventure',
      trips: trips
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving trips");
  }
};

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).lean();
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving trips", error: err });
  }
};

module.exports = {
  travelList,
  tripsList
};
