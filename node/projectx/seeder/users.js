const User = require('./../models/User')
const faker = require('faker')

const insertUsers = [];


for (var i = 0; i < 20; i++) {
    insertUsers.push({
        first_name: faker.name.firstName(),
        email: faker.internet.email(),
        user_password: faker.internet.password(),
        createdAt: faker.date.past(),
        updatedAt: new Date(),
    })
}



User.create(...insertUsers)

