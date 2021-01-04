const faker = require('faker');

const users = [
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
];

exports.users = users;