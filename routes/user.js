const express = require('express');
const UserRouter = express.Router();
const {UserService} = require('../services/user');

UserRouter.get('/:username', (req, res) => {
    const {username} = req.params;

     UserService.read(username)
        .then(data => {
            res.status(200);
            res.json({data});
        })
        .catch(err => {
            res.status(400);
            res.json({err});
        })
});

UserRouter.post('/', (req, res) => {
    const {username, email, bio, picture, zip} = req.body;
  
    UserService.create(username, email, bio, picture, zip)
      .then(data => {
        res.status(200);
        res.json({success: `Created User named ${username} with generated ID: ${data.id}`});
      })
      .catch(err => {
        res.status(400);
        res.json({err:err});
      })
});

UserRouter.put('/', (req, res) => {
  
    const {username, email, bio, picture, zip} = req.body;
  
    UserService.update(username, email, bio, picture, zip)
      .then(data => {
        res.status(200);
        res.json({success: `Updated user named ${username}`});
      })
      .catch(err => {
        res.status(400);
        res.json({err:err});
      })
});

UserRouter.delete('/', (req, res) => {
    const {username} = req.body;
  
    UserService.delete(username)
      .then(data => {
        res.status(200);
        res.json({success: `Deleted User named ${username}`});
      })
      .catch(err => {
        res.status(400);
        res.json({err:err});
      })
});

module.exports = UserRouter;

