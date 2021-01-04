const polution = require("../pkg/geolocation");


const getCity = async () => {
    let data = await getCity.getLocation(req.param.city);
    return data;

}

module.exports = {
    getCity,
}