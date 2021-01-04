const express = require('express');
const weather = require("./handlers/weather");
const polution = require("./handlers/polution");
const api = express();

api.get("/api/v1/weather/:city", weather.getWeather);
// api.get("/api/v1/weather/average/:city", weather.getAverageWeather);
api.get("/api/v1/weather/polution/:city", polution.getPolution);


api.listen(10000, (err) => {

    if (err) {
        return console.log(err)
    }

    console.log("Server started on port 10000");
})