const express = require('express');
const router = express.Router();
const controller = require('./controller.js')

router
  .route('/carouselPhotos')
  .get(controller.get)
  .post(controller.post)

module.exports = router;  