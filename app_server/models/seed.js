// app_server/models/seed.js
const mongoose = require('./db');
const Trip = mongoose.model('trips');
const tripsData = require('./trips.json').trips;

const seed = async () => {
  try {
    console.log('Clearing existing trips');
    await Trip.deleteMany({});

    console.log('Inserting seed trips');
    await Trip.insertMany(tripsData);

    console.log('Seed complete');
  } catch (err) {
    console.log('Seed error:', err);
  } finally {
    mongoose.connection.close();
  }
};

seed();
