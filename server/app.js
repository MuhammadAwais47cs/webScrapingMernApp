const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/Error');
app.use(express.json());

// middleware for error 
app.use(errorMiddleware)
// Routes Imports 

const products = require('./routes/productsRoutes');
app.use('/api/v1',products)
module.exports = app