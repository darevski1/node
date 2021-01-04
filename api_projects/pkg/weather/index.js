const fetch = require('node-fetch');
const mongoose = require("mongoose");
const API_KEY = "5aaee45aae88e18399c5ae8a6f61649b";
const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
const GEO_API_URL = "https://api.ipgeolocation.io/ipgeo?apiKey=6999cbbb0a24412cab673720f375bb5b";
const UNITS = "metric";


const Weather = mongoose.model(
    "weather",
    {
        weather: {
            id: Number,
            main: String,
            // description: String,
            // icon: String
        }
        // main: {
        //     temp: Number,
        //     temp_min: Number,
        //     temp_max: Number,
        //     humidity: Number
        // },
        // wind: {
        //     speed: String,
        //     deg: Number
        // },
        // name: String,
    },
    "weather"
)


fetch(GEO_API_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let location;
        location = data.city;
    }).catch((err) => {
        console.warn('Something went wrong.', err);
    });

const getWeatherOn = async (location) => {
    city = location;
    let url = `${API_ENDPOINT}?appid=${API_KEY}&units=${UNITS}&q=${city}`;
    try {
        let data = await fetch(url);
        data = await data.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}


const saveW = async (data) => {
    let wdata = {
        weather: {
            id: req.data.id,
            main: req.data.main
        }
    }
    let w = new Weather(wdata);
    return await w.save();


}

module.exports = {
    getWeatherOn,
    saveW
}