var express = require('express');
var router = express.Router();
const ProjectsController = require('./../controllers/ProjectsController')

router
    .get('/', ProjectsController.index)

module.exports = router;

