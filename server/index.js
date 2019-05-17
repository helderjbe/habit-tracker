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

habitRoutes.route('/').get((req, res) => {
  Habit.find((err, habits) => {
    if (err) {
      console.log(err);
    } else {
      res.json(habits);
    }
  });
});

habitRoutes.route('/:id').get((req, res) => {
  const { id } = req.params;
  Habit.findById(id, (err, habit) => {
    res.json(habit);
  });
});

habitRoutes.route('/add').post((req, res) => {
  const habit = new Habit(req.body);
  habit
    .save()
    .then(() => {
      res.status(200).json({ habit: 'habit added successfully' });
    })
    .catch(() => {
      res.status(400).send('adding new todo failed');
    });
});

habitRoutes.route('/update/:id').post((req, res) => {
  Habit.findById(req.params.id, (err, habit) => {
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
      .then(() => {
        res.json('Todo updated!');
      })
      .catch(() => {
        res.status(400).send('Update not possible');
      });
  });
});

app.use('/habits', habitRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/habits', { useNewUrlParser: true });
const { connection } = mongoose;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
