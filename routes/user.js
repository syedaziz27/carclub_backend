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
    const {username, email, city, state, zip, uid} = req.body;
  
    UserService.createUser(username, email, city, state, zip, uid)
      .then(data => {
        res.status(200).json({success: `Created User named ${username} with generated ID: ${data.id}`});
      })
      .catch(err => {
        res.status(400).json({err:err});
      })
});

// UserRouter.put('/', (req, res) => {
  
//     const {username, email, bio, picture, zip} = req.body;
  
//     UserService.update(username, email, bio, picture, zip)
//       .then(data => {
//         res.status(200).json({success: `Updated user named ${username}`});
//       })
//       .catch(err => {
//         res.status(400).json({err:err});
//       })
// });

// UserRouter.delete('/', (req, res) => {
//     const {username} = req.body;
  
//     UserService.delete(username)
//       .then(data => {
//         res.status(200);
//         res.json({success: `Deleted User named ${username}`});
//       })
//       .catch(err => {
//         res.status(400);
//         res.json({err:err});
//       })
// });

module.exports = UserRouter;

