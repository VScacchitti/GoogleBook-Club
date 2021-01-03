const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function(req, res) {
      db.GoogleBooks
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.GoogleBooks
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.GoogleBooks
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.GoogleBooks
        .deleteOne({ _id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
