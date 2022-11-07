const express = require('express');
const flagsController = require('../controllers/flagsControllers');

const Router = express.Router();

Router.get('/', flagsController.getFlags);
Router.get('/random', flagsController.getRandomFlag);

Router.post('/', flagsController.postFlag);

module.exports = Router;