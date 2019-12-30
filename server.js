//Main entry point to application
const express = require('express');
const dotenv = require('dotenv');

//Load env variables
dotenv.config({ path: './config/config.env' });

//make app
const app = express();
//set PORT to port from config.env or else set to 5000
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
