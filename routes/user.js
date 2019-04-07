const express = require('express');
const UserRouter = express.Router();
const UserService = require('../services/user');

UserRouter.get('/:email', (req, res) => {
    const {email} = req.params;

     UserService.getUserData(email)
        .then(data => {
            res.status(200).json({data});
        })
        .catch(err => {
            res.status(400).json({err, wtf:'ewfw'});
        })
});

UserRouter.post('/signup', (req, res) => {
    const {username, email, city, state, zip} = req.body;
  
    UserService.createUser(username, email, city, state, zip)
      .then(data => {
        res.status(200).json({success: `Created User named ${username} with generated ID: ${data.id}`});
      })
      .catch(err => {
        res.status(400).json({err:err});
      })
});

UserRouter.put('/photo', (req, res) => {
  
    const {email, picture} = req.body;
  
    UserService.updatePhoto(email, picture)
      .then(data => {
        res.status(200).json({success: `Updated user photo`});
      })
      .catch(err => {
        res.status(400).json({err:err});
      })
});

UserRouter.put('/addUID', (req, res) => {
  
  const {username, uid} = req.body;

  UserService.updateUID(username, uid)
    .then(data => {
      res.status(200).json({success: `Updated user UID`});
    })
    .catch(err => {
      res.status(400).json({err:err});
    })
});



UserRouter.get('/favorites/:email', (req, res) => {
  const {email} = req.params;

  UserService.getFavs(email)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(400).json({err}))
})

module.exports = UserRouter;

