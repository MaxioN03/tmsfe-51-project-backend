let ObjectID = require('mongodb').ObjectID;

const getCollection = (db) => {
  return db.db('myFirstDatabase').collection('articles');
};

const getAll = (db) => {
  return getCollection(db).find({}).toArray()
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
};

const getOne = (db, id) => {
  const details = {'_id': new ObjectID(id)};

  return new Promise((resolve, reject) => {
    getCollection(db)
        .findOne(details, (error, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        });
  });
};

const create = (db, article) => {

  return new Promise((resolve, reject) => {
    getCollection(db)
        .insertOne(article, (error, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(response.ops[0]);
          }
        });
  });
};

const remove = (db, id) => {
  const details = {'_id': new ObjectID(id)};

  return new Promise((resolve, reject) => {
    getCollection(db)
        .remove(details, (error, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        });
  });
};

const update = (db, id, article) => {

  const details = {'_id': new ObjectID(id)};

  return new Promise((resolve, reject) => {
    getCollection(db)
        .update(details, article, (error, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        });
  });
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};