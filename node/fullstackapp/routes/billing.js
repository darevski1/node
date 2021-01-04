var express = require('express');
var router = express.Router();
var faker = require('faker');

const billing = [
    {
        finance: faker.finance.account(),
        transactionType: faker.finance.transactionType(),
        amount: faker.finance.amount(),
        date: faker.date.future(),
    },
    {
        finance: faker.finance.account(),
        transactionType: faker.finance.transactionType(),
        amount: faker.finance.amount(),
        date: faker.date.future(),
    },
    {
        finance: faker.finance.account(),
        transactionType: faker.finance.transactionType(),
        amount: faker.finance.amount(),
        date: faker.date.future(),
    },
    {
        finance: faker.finance.account(),
        transactionType: faker.finance.transactionType(),
        amount: faker.finance.amount(),
        date: faker.date.future(),
    },
    {
        finance: faker.finance.account(),
        transactionType: faker.finance.transactionType(),
        amount: faker.finance.amount(),
        date: faker.date.future(),
    },
]


// for (var i = 0; i < 10; i++) {
//     return i = billing + i
// }
router
    .get('/', (req, res) => {
        res.render('billing', {
            title: "Billing",
            items: billing,
        })
    })

module.exports = router;
