const weather = require("../pkg/average");

const getAverageWeather = async (req, res) => {
    let data = await weather.getAverageCityTemp(req.params.city);
    console.log(data);
    return res.status(200).send(data);
}

module.exports = {
    getAverageWeather
}