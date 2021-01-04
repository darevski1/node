var express = require('express');
var router = express.Router();


const politicians = [
    {
        "name": "Stojan",
        "percent": 24,
    },
    {
        "name": "Pero",
        "percent": 90,
    },
    {
        "name": "Kire",
        "percent": 92,
    },
    {
        "name": "Darko",
        "percent": 55,
    },
    {
        "name": "Vesna",
        "percent": 9,
    },
]
/* GET users listing. */
router
    .post('/', (req, res) => {


        const erroFlag = {
            error: true,
            msg: ""
        }
        politicians.push(req.body)


        res.send({
            message: erroFlag.msg,
            items: politicians,
        })

        politicians.forEach(politician => {
            if (politicians.percent <= 10) {
                erroFlag.error = true;
                erroFlag.msg = "Makedonce"
            } else if (politician.percent > 10 && politician.percent < 90) {
                erroFlag.error = true;
                erroFlag.msg = "coban"
            } else {
                erroFlag.error = true;
                erroFlag.msg = "auuu"
            }
        });




    });

module.exports = router;
