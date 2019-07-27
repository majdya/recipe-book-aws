const query = require('../../database/mongodb');

exports.getAll = (req, res) => {
  query.findAllIn('recipes', {}, (err, results) => {
    res.json(results);
  });
};

exports.addOne = (req, res) => {
  console.log(req.body);
  query.insertOneInto('recipes', req.body, (err, results) => {
    res.json(results);
  });
  res.end();
};

exports.deleteOne = (req, res) => {
  console.log(req.body);
  query.deleteOneFrom('recipes', req.body, (err, results) => {
    res.json(results);
  });
  res.end();
};
