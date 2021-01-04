const fetch = require('node-fetch');
const API_KEY = "5aaee45aae88e18399c5ae8a6f61649b";
const UNITS = "metric";
const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";



const cityMaps = {
    'sk': 'Skopje',
    'bt': 'Bitola',
    'oh': 'Ohrid',
    'te': 'Tetovo',
    'ge': 'Gevegelija',

}
const getAverageCityTemp = (city) => {
    city = cityMaps[city.toLowerCase()];

    if (cache[city] && (new Date().getTime()) - cache[city].timestamp < 60000) {
        return cache[city].data;
    }
    let url = `${API_ENDPOINT}?appid=${API_KEY}&units=${UNITS}&q=${city}`;
    console.log(url);
    try {
        let data = await fetch(url);
        data = await data.json();
        cache[city] = {
            timstamp: new Date().getTime(),
            data
        };
        return data
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAverageCityTemp
}