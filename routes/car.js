const express = require('express');
const CarRouter = express.Router();
const CarService = require('../services/car');

CarRouter.post('/front', (req, res) => {
  
    const {email, picture, make, model, color} = req.body;
  
    CarService.addFrontPhoto(email, picture, make, model, color)
      .then(data => {
        res.status(200).json({success: `Uploaded car front photo`});
      })
      .catch(err => {
        res.status(400).json({err});
      })
});

CarRouter.get('/mycars/:email', (req,res) => {
    const {email} = req.params;

    CarService.getMyCars(email)
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            res.status(400).json(err)
        })
})



module.exports = CarRouter;