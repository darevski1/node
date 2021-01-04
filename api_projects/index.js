const cfg = require("./pkg/config");
require("./pkg/db");
const express = require("express");
const weather = require("./handlers/weather");

const api = express();


api.get("/api/v1/weather/:city", weather.getweather);
api.get("/api/v1/weather/s/:city", weather.saveWeather);

api.listen(cfg.get("server").port, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`Server running on port ${cfg.get("server").port}`);
})