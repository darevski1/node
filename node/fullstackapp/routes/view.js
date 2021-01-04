var express = require('express');
var router = express.Router();
var faker = require('faker');


router.get('/:slug', (req, res) => {

    res.render('view', {
        title: "VIew sigle post",

    });
    const findslug = items.some(item => item.slug === (req.params.slug))

    console.log(findslug)
});

module.exports = router;