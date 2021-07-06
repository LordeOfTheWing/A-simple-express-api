const express = require('express');

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'This route is not yet defined',
  });
};

const getAUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'This route is not yet defined',
  });
};

const createAUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'This route is not yet defined',
  });
};

const deleteAUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'This route is not yet defined',
  });
};

const updateAUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
    message: 'This route is not yet defined',
  });
};

const router = express.Router();

//Users Route
router.route('/').get(getAllUsers).post(createAUser);
router.route('/:id').get(getAUser).patch(updateAUser).delete(deleteAUser);

module.exports = router;
