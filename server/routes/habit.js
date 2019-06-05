const express = require('express');

const router = express.Router();

const Habit = require('../models/Habit');

router.route('/').get((req, res) => {
  Habit.find((err, habits) => {
    if (err) {
      console.log(err);
    } else {
      res.json(habits);
    }
  });
});

router.route('/:id').get((req, res) => {
  const { id } = req.params;
  Habit.findById(id, (err, habit) => {
    res.json(habit);
  });
});

router.route('/add').post((req, res) => {
  const habit = new Habit(req.body);
  habit
    .save()
    .then(() => {
      res.status(200).json({ habit: 'habit added successfully' });
    })
    .catch(() => {
      res.status(400).send('adding new habit failed');
    });
});

router.route('/update/:id').post((req, res) => {
  Habit.findById(req.params.id, (err, habit) => {
    if (!habit) {
      res.status(404).send('data is not found');
    } else {
      habit.title = req.body.title;
      habit.details = req.body.details;
      habit.recurrence = req.body.recurrence;
      habit.parent = req.body.parent;
    }

    habit
      .save()
      .then(() => {
        res.json('Habit updated!');
      })
      .catch(() => {
        res.status(400).send('Update not possible');
      });
  });
});

module.exports = router;
