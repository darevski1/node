const mongoose = require("mongoose");



const Songs = mongoose.model(
    'songs',
    {
        name: String,
        artist: String,
        year: Number

    },
    "songs"
)

const save = async (data) => {
    let song = await Songs(data);
    return await song.save();
}

module.exports = {
    save,
}