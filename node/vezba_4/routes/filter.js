var express = require('express');
var router = express.Router();

var users = require('./constatns/people');


router.get('/', (req, res) => {

    users.forEach(user => {
        return user;
    });

    if (user.randomNUmber > 12000) {
        res.json(user.randomNUmber)
    }


    res.send({
        message: "filter",
        items: users,
    })
})

module.exports = router;
