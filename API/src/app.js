const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// Import routes
const apiRoutes = require('./routes');
app.use('/api', apiRoutes);

module.exports = app;
