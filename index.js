const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// environment config
dotenv.config();

// Connect to DB.
mongoose.connect(process.env.DB_CONNECT,
() => console.log('connected to db!'));


// Middleware
app.use(express.json());


// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


app.listen(6000, () => console.log('Server Up and running!'));