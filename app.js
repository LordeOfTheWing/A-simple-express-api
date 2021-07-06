const express = require('express');
const { readFileSync, writeFile } = require('fs');
const morgan = require('morgan');

const tourRouter = require('./Routes/tourRoutes');
const userRouter = require('./Routes/userRoutes');

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json()); //parsing json from the body

//ROUTING
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
