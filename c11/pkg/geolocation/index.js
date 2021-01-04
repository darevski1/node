const fetch = require('node-fetch');
const API_KEY = "d4f7633ca3e34f4ca00909f4f0bb0579";
const API_ENDPOINT = "https://api.ipgeolocation.io/ipgeo";


const getPolutionBycity = async (req, res) => {
    const url = `${API_ENDPOINT}?apiKey=${API_KEY}`;
    try {
        const data = await fetch(url);
        data = data.json();
        console.log(data);
        if (data) {
            return res.status(200).send(data);
        }

    } catch (err) {
        console.log(err);
        return res.status("500").send("Server Error");
    }
}


module.exports = {
    getPolutionBycity,
}