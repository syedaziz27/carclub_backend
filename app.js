const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const UserRouter = require('./routes/user');
const SearchRouter = require('./routes/search');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/user', UserRouter);
app.use('/car', SearchRouter);


module.exports = {app,}  