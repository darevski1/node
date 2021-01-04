var express = require('express')
const RegisterController = require('./../controllers/RegisterController')
var router = express.Router()
const Register = require('./../controllers/RegisterController')


router
    .get('/', RegisterController.index)
    .post('/', RegisterController.register)



module.exports = router