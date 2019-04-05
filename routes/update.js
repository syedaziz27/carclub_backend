const express = require('express');
const UpdateRouter = express.Router();
const UpdateService = require('../services/update');

UpdateRouter.put('/', (req, res) => {
  
    const {picture, email} = req.body;
  
    UpdateService.update(picture, email)
      .then(data => {
        res.status(200);
        res.json({success: `Updated user with email ${email}`});
      })
      .catch(err => {
        console.log('GQGERWGER')
        res.status(400);
        res.json({err:err, idk: 'rfagfrf'});
     
      })
});

module.exports = UpdateRouter;