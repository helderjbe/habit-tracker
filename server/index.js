const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

const habitRoutes = express.Router();

const Habit = require('./models/Habit');

app.use(cors());
app.use(bodyParser.json());

habitRoutes.route('/').get(function(req, res) {
  Habit.find(function(err, habits) {
    if (err) {
      console.log(err);
    } else {
      res.json(habits);
    }
  });
});

habitRoutes.route('/:id').get(function(req, res) {
  const id = req.params.id;
  Habit.findById(id, function(err, habit) {
    res.json(habit);
  });
});

habitRoutes.route('/add').post(function(req, res) {
  const habit = new Habit(req.body);
  habit
    .save()
    .then(habit => {
      res.status(200).json({ habit: 'habit added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new todo failed');
    });
});

habitRoutes.route('/update/:id').post(function(req, res) {
  Habit.findById(req.params.id, function(err, habit) {
    if (!habit) {
      res.status(404).send('data is not found');
    } else {
      habit.title = req.body.title;
      habit.details = req.body.details;
      habit.frequency = req.body.frequency;
      habit.failed = req.body.failed;
    }

    habit
      .save()
      .then(todo => {
        res.json('Todo updated!');
      })
      .catch(err => {
        res.status(400).send('Update not possible');
      });
  });
});

app.use('/habits', habitRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/habits', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully');
});

app.listen(PORT, function() {
  console.log('Server is running on Port: ' + PORT);
});
