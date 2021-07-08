/* eslint-disable prettier/prettier */
const express = require('express');

const tourController = require("../Controllers/tourController");

const router = express.Router();
//Middleware
router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createATour);

router
  .route('/:id')
  .get(tourController.getATour)
  .delete(tourController.deleteATour)
  .patch(tourController.updateATour);

module.exports = router;
