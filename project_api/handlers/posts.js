const postModel = require("../pkg/posts/mongo");


const all = async (req, res) => {
    try {
        let data = await postModel.all();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(200).send("Internal Server Error");
    }
}

const one = async (req, res) => {
    try {
        let data = await postModel.one(req.params.id);
        if (data) {
            return res.status(200).send(data)
        }
        return res.status(404).send("Not found");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");

    }
}
const save = async (req, res) => {
    try {
        let data = await postModel.save(req.body);
        if (data) {
            return res.status(201).send(data);
        }

    } catch (err) {
        console.log(err);
        return res.status(400).send("Internal Server Error");
    }
}

const update = async (req, res) => {
    try {
        let data = await postModel.update(req.params.id, req.body);
        if (data) {
            return res.status(204).send("No content");
        }
        return res.status(404).send("Not found");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}
module.exports = {
    all,
    one,
    save,
    update
}