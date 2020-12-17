const mongoose = require("mongoose");

var Blog = mongoose.model(
    'blog',
    {
        post_title: String,
        post_body: String
    },
    'blog',
);


const all = async () => {
    let data = await Blog.find({});
    return data;
}

const one = async (id) => {
    let data = await Blog.findOne({ _id: id });
    return data;
}
const save = async (postModel) => {
    let obj = new Blog(postModel);
    let data = await obj.save();
    return data;
}

const update = async (id, postModel) => {
    let data = await Blog.updateOne({ _id: id }, postModel);
    return data.nModified !== 0;
}
module.exports = {
    all,
    one,
    save,
    update
}