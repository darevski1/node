const mongoose = require("mongoose");

const Users = mongoose.model(
    'users_db',
    {
        first_name: String,
        last_name: String,
        username: String,
        password: String,
        role: String,
        email: String,
        date: Date,
        _deleted: Boolean,
        _created: Date,
    },
    'users_db'
);
const getAll = async () => {
    let data = await Users.find();
    return data;
};
const getOne = () => {

};
const findUserByEmail = async (email) => {
    let data = await Users.findOne({ email });
    return data;
};
// Save the user in db
const save = async (userData) => {
    let saveUser = new Users(userData);
    let data = await saveUser.save();
    return data;
};
const update = () => {

};
const remove = () => {

};
module.exports = {
    getAll,
    getOne,
    findUserByEmail,
    save,
    remove
}