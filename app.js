const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) START THE SERVER
module.exports = app;
// Middleware stack, even routes are middleware, logging, parsing body setting headers, response and request objects.
// p.b, logging, setting headers, routes back to the clients
// use middleware, app.use(expresss.json)
// Mongo DB, is a database NoSQL database, relational, each database contains one or more collection, Documents, Col- Tables, Rows
// blog - posts, users, user, MongoDb is document database, documents, json, instead of in tables. Built in scalability, MOngoDB wil make it vwry possible for you to grow.
// Performant - Embedded data models, indexing, sharding, flexible documetn native duplicatioin
// Free and Open source published under the sspl license, bson, in relational each fild is calles a row or a column
// Embedded documents/Denormalizing, 16mb for each document.
