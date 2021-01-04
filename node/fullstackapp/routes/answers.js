var express = require('express');
var router = express.Router();
var faker = require('faker');



const blogpost = [

    {
        id: 1,
        titles: 'Answers page',
        blogtitle: faker.lorem.sentence(),
        paragraph: faker.lorem.paragraph(),
        slug: faker.lorem.slug(),
    },
    {
        id: 2,
        titles: 'Answers page',
        blogtitle: faker.lorem.sentence(),
        paragraph: faker.lorem.paragraph(),
        slug: faker.lorem.slug(),
    },
    {
        id: 3,
        titles: 'Answers page',
        blogtitle: faker.lorem.sentence(),
        paragraph: faker.lorem.paragraph(),
        slug: faker.lorem.slug(),

    },
    {
        id: 4,
        titles: 'Answers page',
        blogtitle: faker.lorem.sentence(),
        paragraph: faker.lorem.paragraph(),
        slug: faker.lorem.slug(),

    },
]

/* GET home page. */
router.get('/', (req, res) => {
    res.render('answers', {
        title: "Welcome",
        items: blogpost,
    });
});

module.exports = router;
