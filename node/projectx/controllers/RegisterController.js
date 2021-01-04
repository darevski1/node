const { request } = require('express');
var express = require('express');
var router = express.Router();


module.exports = {

    index: ('/', (req, res) => {
        res.sendStatus(200)
    }),


    register: ('/', (req, res) => {

        const register = req.body.email
        res.send(register)

    })

}