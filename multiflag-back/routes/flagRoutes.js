const express = require('express');
const flagController = require('../controllers/flagControllers');

const Router = express.Router();

Router.get('/', flagController.getFlags);

Router.post('/', flagController.postFlag);

module.exports = Router;