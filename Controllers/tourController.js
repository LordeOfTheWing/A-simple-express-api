const { readFileSync, writeFile } = require('fs');

const tours = JSON.parse(
  readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

//Middleware
exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);

  if (req.params.id * 1 > tours.length) {
    //If tour id does not exist then return the following
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

//A checkbody middleware
exports.checkBody = (req, res, next) => {
  if (!req.body.name || req.body.price) {
    return res.status(400).json({
      status: 'Fail',
      message: 'Missing name or price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getATour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1; //converting string to a number
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
};

exports.createATour = (req, res) => {
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

exports.updateATour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.deleteATour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
