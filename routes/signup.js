const express = require('express');
const SignupRouter = express.Router();
const SignupService = require('../services/signup');

SignupRouter.post('/', (req, res) => {
    const {username, email, picture, city, state, zip} = req.body;
  
    SignupService.create(username, email, picture, city, state, zip)
      .then(data => {
        res.status(200);
        res.json({success: `Created User named ${username} with generated ID: ${data.id}`});
      })
      .catch(err => {
        res.status(400);
        res.json({err:err});
      })
});

module.exports = SignupRouter;