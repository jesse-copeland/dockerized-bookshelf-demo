const express = require('express');

const User = require('../db/models/User');

const router = express.Router();

router.get('/', (req, res) => {
  return User.fetchAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});

router.post('/', (req, res) => {
  let data = req.body;
  data.email = data.email.toLowerCase();

  return new User({
    name: data.name,
    email: data.email,
    password: data.password
  })
  .save()
  .then(user => {
    return res.json(user);
  })
  .catch(err => console.log(err))
});

module.exports = router;