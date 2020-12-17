const fs = require('fs');



var listUsers = 'const userList = [];';

const createDir = (path) => {
    return new Promise((success, faile) => {
        fs.mkdir(path, (err) => {
            if (err) {
                return fail(err);
            } else {

                fs.writeFile('users/users.js', listUsers, (err) => {
                    if (err) {
                        return fail(err);
                    } else {
                        return success();
                    }
                })
                return success();

            }
        })

    });
}

createDir("users")
    .then(res => {
        console.log("Success");
    })
    .catch(err => {
        console.log("Faile");
    })