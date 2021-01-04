var express = require('express');
var router = express.Router();
const faker = require('faker')

const people = [
    {
        id: 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        randomNUmber: 454545,
    },
    {
        id: 2,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        randomNUmber: 555555,
    },
    {
        id: 3,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        randomNUmber: faker.random.number(),
    },
    {
        id: 4,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        randomNUmber: faker.random.number(),
    },
    {
        id: 5,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        randomNUmber: faker.random.number(),
    },
]
router.get('/', (req, res) => {
    res.send({
        message: "List of all users",
        items: people
    })
})

router.get("/:id", (req, res) => {
    const findpersonid = people.some(person => person.id === parseInt(req.params.id))

    if (!findpersonid) {
        return res.json(`Requested user with folowing id ${req.params.id} not found`)
    } else {
        res.json(people.filter(person => person.id === parseInt(req.params.id)))
    }


});

router.post('/', (req, res) => {
    let maxnumber = 0
    people.forEach(person => {
        if (person.id > maxnumber) {
            maxnumber = person.id
        }
    })

    const newPerson = {
        id: maxnumber + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        randomNUmber: 21212121,
    }

    people.push(newPerson)

    res.send({
        message: "We just update people list",
        items: people
    })
})
// delete user
router.delete("/:id", (req, res) => {
    // find the user id
    let findid = people.some(person => person.id === parseInt(req.params.id));

    if (findid) {
        let deleteuser = people.filter(person => person.id !== parseInt(req.params.id))
        res.json(deleteuser);
    } else {
        res.json(`${req.params.id} was not found! try again`)
    }

    res.send(req.body)
})

module.exports = router;