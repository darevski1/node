const weather = require("../pkg/weather");

const getweather = async (req, res) => {
    let data = await weather.getWeatherOn(req.params.city);
    console.log(data);
    return res.status(200).send(data)
}
const saveWeather = async (req, res) => {
    let data = await weather.saveW(req.params.city);
    res.status(200).send(data);
}


module.exports = {
    getweather,
    saveWeather
}