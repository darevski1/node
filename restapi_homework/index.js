const express = require('express');
const bodyParser = require('body-parser');

// let userList = [];

const api = express();
const fs = require("fs");
let newUser = []

api.use(bodyParser.json());


api.post('/users', (req, res) => {

    addUser('users/users.js')
        .then(rs => {
            res.send(rs);
        })
        .catch(err => {
            console.log(err);
        })

})


// Get All user from user list
api.get('/users', (req, res) => {
    const readFile = (data) => {
        return new Promise((success, fail) => {
            fs.readFile(data, 'utf8', (err, data) => {
                if (err) {
                    return fail(err);
                } else {
                    const resault = JSON.parse(data);
                    return success(resault);
                }
            });
        });
    }
    readFile('users/users.js')
        .then(rs => {
            res.status(200).send(rs);
        })
        .catch(err => {
            console.log(err);
        })
});


// Get the user by id
api.get('/users/:id', (req, res) => {
    const findId = req.params.id;
    getUser = (path) => {
        return new Promise((success, fail) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    return fail(err);
                }

                // Get all users from file
                var listUser = JSON.parse(data);
                // Get the id
                var userid = listUser.filter(user => user.id === parseInt(req.params.id));

                return success(userid[0]);

            })
        })
    }
    getUser('users/users.js')
        .then(rs => {
            res.status(200).send(rs);
        })
        .catch(err => {
            console.log(err)
        })

});

api.delete('/users/:id', (req, res) => {
    deleteUser = (path) => {
        return new Promise((success, fail) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    return (fail);
                } else {
                    var getUsers = JSON.parse(data);
                    listusers = getUsers.filter(user => user.id != req.params.id)

                    getUsers.push(listUsers);
                    return success(listusers);
                }
            })
        })
    }
    deleteUser('users/users.js')
        .then(rs => {
            res.status(200).send(rs)
        })
        .catch(err => {
            res.send(err)
        })
})
api.patch('/users/users.js', (req, res) => {
    updateUser = (path) => {
        return new Promise((success, fail) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    return fail(err);
                }
                else {
                    var getUser = JSON.parse(data);


                    return success();
                }
            })
        })
    }
})

const addUser = (path) => {
    return new Promise((success, fail) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            } else {
                // Parse data from object 
                var usersData = JSON.parse(data);
                // Get data from request
                let getId = 0;
                usersData.forEach(data => {
                    if (data.id > getId) {
                        getId = data.id;
                        console.log(getId);
                    }
                });
                // Create new object
                let newUser = {
                    id: getId + 1,
                    name: req.body.name,
                    type: req.body.type
                };
                // Add new user-object to the array
                usersData.push(newUser);
                fs.writeFileSync('users/users.js', JSON.stringify(usersData, null, 2), (err) => {
                    if (err) {
                        return fail(err);
                    } else {
                        return success();
                    }
                })
                return success(usersData);
            }
        })
    })
}

// Start app on port 9000
api.listen(9000, err => {
    if (err) {
        console.log(err)
    }
    console.log('Server started at port 9000');
})