require('dotenv').config();

const express = require('express');

const app = express();

const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalStrat = require('passport-local');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.NODE_ENV === 'production' ? 80 : 4000;

const habitRoutes = require('./routes/habit');

app.use(cors());
app.use(bodyParser.json());

app.set('trust proxy', 1); // trust first proxy

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const { connection } = mongoose;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use('/habits', habitRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
