const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// views
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
const travelRouter = require(path.join(__dirname, 'app_server', 'routes', 'travel.js'));
app.use('/', travelRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
