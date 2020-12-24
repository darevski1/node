const express = require("express");
const bodyParser = require("body-parser");


const api = express();

api.get("/api/v1/auth", auth.create);


api.listen(9000, () => {
    console.log("Success started server")
})