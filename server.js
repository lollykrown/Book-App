const express = require('express');
const app = express();
const db = require('./server/models/db');
const port = 3000;
const seed = require('./server/models/seed/seed-db');

// setup the Express middlware
require('./server/middleware/middleware')(app);

// setup the api
require('./server/api')(app);

// app.listen(port, () => {
//   console.log('running server on port ' + port);
// })

// Uncomment below to Seed Database First
// db.sequelize.sync(
//   { force: true }
//   )
//   .then(() => {
//     seed.insert();
//   })
//   .then(() => {
//       app.listen(port, () => {
//           console.log('running server on port ' + port);
//     })
// });

// connect to DB then run server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log('running server on port ' + port);
  })
});
