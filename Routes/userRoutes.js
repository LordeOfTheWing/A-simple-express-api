const express = require('express');

const userController = require('./../Controllers/userController');

const router = express.Router();

//Users Route
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createAUser);
router
  .route('/:id')
  .get(userController.getAUser)
  .patch(userController.updateAUser)
  .delete(userController.deleteAUser);

module.exports = router;
