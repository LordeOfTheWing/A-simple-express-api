const express = require('express');

const tourController = require('./../Controllers/tourController');

const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createATour);
router
  .route('/:id')
  .get(tourController.getATour)
  .delete(tourController.deleteATour)
  .patch(tourController.updateATour);

module.exports = router;
