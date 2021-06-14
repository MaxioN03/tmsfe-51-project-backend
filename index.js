const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const routes = require('./src/routes');
const db = require('./config/db');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);

  routes(app, database);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
