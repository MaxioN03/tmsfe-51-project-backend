const articleRequest = require('../DAO/articlesDAO');

const getAllArticles = (db) => {
  return articleRequest.getAll(db);
};

const getArticle = (db, id) => {
  return articleRequest.getOne(db, id);
};

const createArticle = (db, article) => {
  return articleRequest.create(db, article);
};

const removeArticle = (db, id) => {
  return articleRequest.remove(db, id);
};

const updateArticle = (db, id, article) => {
  return articleRequest.update(db, id, article);
};


module.exports = {
  getAllArticles,
  getArticle,
  createArticle,
  removeArticle,
  updateArticle
};