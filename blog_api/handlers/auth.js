const userModel = require("../pkg/user");
const bcrypt = require('bcryptjs');
const cfg = require('../pkg/config');
const jwt = require('jsonwebtoken');

const create = async (req, res) => {
    // Validate User Data
    // Check if the user exist in db
    try {
        let finduser = await userModel.findUserByEmail(req.body.email);
        if (finduser) {
            return res.status(409).send("Conflict");
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send("Internal Server Error");
    }
    req.body.password = bcrypt.hashSync(req.body.password);
    req.body.role = "user";
    req.body.date = new Date();
    req.body._delete = false;
    req.body._create = new Date();

    try {
        let userdata = await userModel.save(req.body);
        return res.status(201).send(userdata);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}
const login = async (req, res) => {
    try {
        let data = await userModel.findUserByEmail(req.body.email);
        if (!data) {
            return res.status(403).send("Not found");
        }
        if (bcrypt.compareSync(req.body.password, data.password)) {
            let payload = {
                uid: data._id,
                first_name: data.first_name,
                last_name: data.last_name,
                username: data.username,
                role: data.role,
                exp: (new Date().getTime() + (365 * 24 * 60 * 60 * 1000)) / 1000
            };

            let key = cfg.get('server').jwt_key;
            let token = jwt.sign(payload, key);
            return res.status(200).send({ jwt: token });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    create,
    login
}