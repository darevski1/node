const blogModel = require("../pkg/blog/mongo");
const blogValidator = require("../pkg/blog/validator");
// random number generator
const makeid = require("../pkg/fn");
const cfg = require('../pkg/config');
const jwt = require('jsonwebtoken');

const getAll = async (req, res) => {
    try {
        let data = await blogModel.getAll();
        // if (!data) {
        //     return res.status(403).send("Forbiden")
        // } else {
        //     let payload = {
        //         uid: data._id,
        //         tags: data.tags,
        //         title: data.title,
        //         description: data.description,
        //         content: data.content,
        //         exp: (new Date().getTime() + (365 * 24 * 60 * 60 * 1000)) / 1000
        //     }
        //     let key = cfg.get('server').jwt_key;
        //     // let token = jwt.sign(payload, key);
        //     return res.status(200).send({ jwt: data });
        // }
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}
const getOne = async (req, res) => {
    try {
        let data = await blogModel.getOne(req.params.id);
        if (data) {
            return res.status(200).send(data);
        }
        return res.status(200).send("Not found");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Message");
    }
}
const save = async (req, res) => {


    // try {
    //     await blogValidator.validate(req.body, blogValidator.blogSchema);
    //     res.status(200).send("Ok");
    // } catch (err) {
    //     console.log(err);
    //     return res.status(400).send("Bad requesttttt");
    // }

    try {
        let data = {
            ...req.body,
            _deleted: false,
            _created: true,
            publish_date: new Date(),
            user: { id: req.user.uid },
        }
        let post = await blogModel.save(data);
        res.status(201).send(post);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}
const search = async (req, res) => {
    try {
        let data = await blogModel.search(req.params.tags);
        if (data) {
            res.status(200).send(data);
        }
        return res.status(403).send("Bad request!!!")
    } catch (err) {
        console.log(err);
        return res.status(500).send("Message");
    }
}
const update = async (req, res) => {
    try {
        res.status(200).send("Ok");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Message");
    }
}
const remove = async (req, res) => {
    try {
        res.status(200).send("Ok");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Message");
    }
}
module.exports = {
    getAll,
    getOne,
    save,
    search,
    update,
    remove,
}