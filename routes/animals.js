const express = require('express');
const router = express.Router();

const Animal = require('../models/animal');

router.route('/')
  .get(function(req, res) {
    Animal.find({}, function(err, clients) {
      res.status(err ? 400 : 200).send(err || clients);
    });
  })
  .post(function(req, res) {
    Animal.create(req.body, function(err, newClient) {
      res.status(err ? 400 : 200).send(err || newClient);
    });
  });

module.exports = router;

