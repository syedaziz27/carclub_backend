const express = require('express');
const CarRouter = express.Router();
const CarService = require('../services/car');

CarRouter.post('/front', (req, res) => {
  
    const {email, picture, make, model, color, year, price, mileage} = req.body;
  
    CarService.addFrontPhoto(email, picture, make, model, color, year, price, mileage)
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

CarRouter.get('/search/:make/:model', (req, res) => {
    const {make, model} = req.params;

    CarService.getCars(make, model)
        .then(data => {
            res.status(200).json({data});
        })
        .catch(err => {
            res.status(400).json({err})
        })
})

CarRouter.get('/:carid', (req, res) => {
    const {carid} = req.params;

    CarService.getVehicleData(carid)
        .then(data => {
        res.status(200).json({data});
        })
        .catch(err => {
        res.status(400).json({err})
        })
})

CarRouter.post('/addfav', (req, res) => {
    const {carid, make, model, color, year, price, userEmail, mileage, frontimg} = req.body;

    CarService.addToFavs(carid, make, model, color, year, price, userEmail, mileage, frontimg)
        .then(data => {
            res.status(200).json({data});
        })
        .catch(err => {
            res.status(200).json({err})
        })
})

CarRouter.put('/newowner', (req, res) => {
    const {userEmail, carid} = req.body;

    CarService.updateOwner(userEmail, carid)
        .then(data => {
            res.status(200).json({data});
        })
        .catch(err => res.status(400).json({err}));
});

CarRouter.post('/transaction', (req, res) => {
    const {sellerEmail, buyerEmail, make, model, color, year, mileage,price,frontimg, carid} = req.body;

    CarService.postTransaction(sellerEmail, buyerEmail, make, model, color, year, mileage,price,frontimg, carid)
        .then(data => res.status(200).json({data}))
        .catch(err => res.status(400).json({err}))
})

module.exports = CarRouter;