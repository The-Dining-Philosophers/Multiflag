const express = require('express');
const flagsController = require('../controllers/flagsControllers');

const Router = express.Router();

Router.get('/', flagsController.getFlags);

Router.post('/', flagsController.postFlag);

module.exports = Router;