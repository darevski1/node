const { Validator } = require('node-input-validator');


const blogSchema = {
    publish_date: 'require',
    title: 'required|minLength:11',
    description: 'required|minLength:31',
    content: 'required|minLength:11',
    tags: 'required',
    user: 'required',
}


const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    blogSchema,
    validate
};