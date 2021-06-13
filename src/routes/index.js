const articlesRoutes = require('./articlesRoutes');

module.exports = function(app, db) {
  articlesRoutes(app, db);
};