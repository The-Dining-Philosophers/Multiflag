const mongoose = require('mongoose');
const app = require('./app');

const mongodb = process.env.MONGODB || 'mongodb://db:27017/multiflag';
const port = process.env.PORT || 8080;

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) console.log(`ERROR: connecting to Database. ${err}`);
  else app.listen(port, console.log(`API started on: http://localhost:${port}`));
});