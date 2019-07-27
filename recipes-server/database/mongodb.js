const { MongoClient } = require('mongodb');
require('env2')('./config.env');

const { mongoURI } = process.env;

console.log(mongoURI);

const findAllIn = (collName, query, cb) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect(err => {
    if (err) throw err;
    const db = client.db('Recipes');
    db.collection(collName)
      .find(query)
      .toArray((error, result) => {
        if (error) cb(error);
        cb(null, result);
      });
    client.close();
  });
};

const insertOneInto = (collName, obj, cb) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect(err => {
    if (err) throw err;
    const db = client.db('Recipes');
    db.collection(collName).insertOne(obj);
    client.close();
  });
};

const deleteOneFrom = (collName, obj, cb) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect(err => {
    if (err) throw err;
    const db = client.db('Recipes');

    console.log('here');

    db.collection(collName).deleteOne(obj, (err, obj) => {
      if (err) throw err;
      console.log('1 document deleted');
    });
    client.close();
  });
};

module.exports = {
  findAllIn,
  insertOneInto,
  deleteOneFrom
};
