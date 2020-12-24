const blogModel = require("../pkg/blog/mongo");
const blogValidator = require("../pkg/blog/validator");

const getAll = async (req, res) => {
    try {
        let data = await blogModel.getAll();
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
            res.status(200).send("Ok");
        }
        return res.status(200).send("Not found");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Message");
    }
}
const save = async (req, res) => {
    try {
        await blogValidator.validate(req.body, blogValidator.blogSchema);
        res.status(200).send("Ok");
    } catch (err) {
        console.log(err);
        return res.status(400).send("Bad request");
    }
}
const search = async (req, res) => {
    try {
        res.status(200).send("Ok");
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