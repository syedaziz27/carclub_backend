const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const cors = require('cors');

const UserRouter = require('./routes/user')


// app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/user', UserRouter);

module.exports = {app,}