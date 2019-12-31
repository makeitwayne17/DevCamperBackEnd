//Main entry point to application
const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');

//Route files
const bootcamps = require('./routes/bootcamps.js');

//Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

//app.use(logger); //The app(server) will use the logger on each API call NOT USED

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
