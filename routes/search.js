const express = require('express');
const SearchRouter = express.Router();
const {SearchService} = require('../services/search');

SearchRouter.get('/', (req, res) => {
    const {makeId} = req.body;

    SearchService.getCars(makeId)
        .then(data => {
            res.status(200);
            res.json({data:data})
        })
        .catch(err => {
            res.status(400);
            res.json({err})
        })
});

module.exports = SearchRouter;