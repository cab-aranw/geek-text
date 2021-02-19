const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// Store environmental variables in dotenv file
require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 9933;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to MongoDB database");
})


// Routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

const genresRouter = require('./routes/genres');
app.use('/genres', genresRouter);

const authorsRouter = require('./routes/authors');
app.use('/authors', authorsRouter);


// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
