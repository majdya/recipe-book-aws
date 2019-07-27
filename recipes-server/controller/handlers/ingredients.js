const query = require("../../database/mongodb");

exports.get = (req, res) => {
  console.log(query);
  query.findAllIn("ingredients", {}, (err, results) => {
    res.json({ data: results });
  });
};
