const express = require('express');
const { readFileSync, writeFile } = require('fs');

const tours = JSON.parse(
  readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

const router = express.Router();

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getATour = (req, res) => {
  const id = req.params.id * 1; //converting string to a number
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid Id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
};

const createATour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const updateATour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    //If tour id does not exist then return the folllowing
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

const deleteATour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    //If tour id does not exist then return the folllowing
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

router.route('/').get(getAllTours).post(createATour); //refactoring using router
router.route('/:id').get(getATour).delete(deleteATour).patch(updateATour);

module.exports = router;
