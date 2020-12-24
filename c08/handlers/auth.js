const usersModel = require("../pkg/users");
const userValidator = require("../pkg/users/validator");
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const cfg = require('../pkg/config');

const create = async (req, res) => {
    // validate userdata
    try {
        await userValidator.validate(req.body, userValidator.registrationSchema)
    } catch (err) {
        console.log(err);
        return res.status(400).send("Bad Request");
    }
    // check if user exist in db
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if (ru) {
            return res.status(409).send("Conflict!!! User aready exists...");
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    req.body.active = true;
    req.body.role = 'user';
    req.body._created = new Date();
    req.body._deleted = false;
    // Save user
    try {
        let u = await usersModel.save(req.body);
        return res.status(201).send(u)
    } catch (err) {
        res.status(200).send("Ok");
        return res.status(500).send("Internal Server Error");
    }
};
const login = async (req, res) => {
    // validate 
    try {
        await userValidator.validate(req.body, userValidator.loginSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Request');
    }
    // get user
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if (!ru) {
            return res.status(403).send('Forbidden');
        }
        if (bcrypt.compareSync(req.body.password, ru.password)) {

            let payload = {
                uid: ru._id,
                role: ru.role,
                email: ru.email,
                first_name: ru._first_name,
                last_name: ru._last_name,
                exp: (new Date().getTime() + (365 * 24 * 60 * 60 * 1000)) / 1000
            }
            let key = cfg.get('server').jwt_key;
            let token = jwt.sign(payload, key);
            return res.status(200).send({ jwt: token });
        }
        return res.status(401).send('Unauthorized');
    } catch (err) {
        console.log(err);
        // return res.status(500).send('Internal Server Error');
    }
};
const refreshToken = async (req, res) => {
    res.status(200).send("Ok")
};
const forgotPassword = async (req, res) => {
    res.status(200).send("Ok")
};
const resetPassword = async (req, res) => {
    res.status(200).send("Ok")
};
// change user password
const changePassword = async (req, res) => {
    // validate
    try {
        await userValidator.validate(req.body, userValidator.changePassSchema)
    } catch (err) {
        console.log(err);
        return res.status(400).send("Bad Request");
    }

    try {
        let finduser = await usersModel.getOneByEmail(req.body.email);
        if (!finduser) {
            return res.status(403).send('Forbidden');
        }
        if (!bcrypt.compareSync(req.body.password, finduser.password)) {
            return res.status(403).send("Forbidden");
        }
        if (req.body.new_password === req.body.confirm_password) {
            // return console.log(true);
            req.body.password = bcrypt.hashSync(req.body.new_password);
            // console.log(pwd)
            let update = await usersModel.update(finduser._id, req.body);
            return res.status(201).send('Success');

        } else {
            return res.status(403).send('Password mismatach!!!');
        }
        return res.status(401).send("Unatorized");
    } catch (err) {
        console.log(err)
        // return res.status(500).send("Internal Server Error");
    }


};

// get all users from db
const listAccounts = async (req, res) => {
    let data = await usersModel.getAll({});
    res.status(200).send(data)
};


module.exports = {
    create,
    login,
    refreshToken,
    forgotPassword,
    resetPassword,
    changePassword,
    listAccounts
}