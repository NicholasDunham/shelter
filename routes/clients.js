const express = require('express');
const router = express.Router();

const Client = require('../models/client');

router.route('/')
  .get(function(req, res) {
    Client.find({}, function(err, clients) {
      res.status(err ? 400 : 200).send(err || clients);
    });
  })
  .post(function(req, res) {
    Client.create(req.body, function(err, newClient) {
      res.status(err ? 400 : 200).send(err || newClient);
    });
  });

module.exports = router;
