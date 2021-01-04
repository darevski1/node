const mongoose = require('mongoose');
const Blog = mongoose.model(
    'blogpost',
    {
        _deleted: Boolean,
        _created: Boolean,
        publish_date: Date,
        title: String,
        description: String,
        content: String,
        tags: [String],
        user: {
            first_name: String,
            last_name: String,
            id: String,
        }
    },
    'blogpost'
);
const getAll = async () => {
    let data = await Blog
        .find()
        .select()
        .sort({ 'date': -1 })
        .limit(100)
    return data;
}

const getOne = async (id) => {
    let data = await Blog.findOne({ _id: id });
    return data;
}

const save = async (blogData) => {
    let post = new Blog(blogData);
    let data = await post.save();
    return data;
}
const search = async (tags) => {
    let data = await Blog.find({ tags: tags });
    return data;
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