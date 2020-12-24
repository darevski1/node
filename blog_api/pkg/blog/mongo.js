const mongoose = require('mongoose');

const Blog = mongoose.model(
    'users',
    {
        _id: Number,
        _deleted: false,
        _created: false,
        publish_date: Date,
        title: String,
        description: String,
        content: String,
        tags: [],
        user: {
            first_name: String,
            last_name: String,
            id: Number,
        }
    },
    'users'
);


const getAll = async () => {
    let data = await Blog
        .find()
        .sort({ 'date': -1 })
        .limit(10)
    return data;
}

const getOne = async () => {
    let data = await Blog.findOne({ _id: id });
    return data;
}

const save = async (blogData) => {
    let post = new Blog(blogData);
    let data = await post.save();
}
const search = () => {

}
const update = () => {

}
const remove = () => {

}


module.exports = {
    getAll,
    getOne,
    save,
    search,
    update,
    remove,
}