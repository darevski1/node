const db = require("./pkg/db");
const express = require("express");
const bodyParser = require("body-parser");
const blog = require("./handlers/posts")

const api = express();
api.use(bodyParser.json());



api.get("/blogpost", blog.all);
api.get('/blogpost/:id', blog.one);
api.post('/blogpost', blog.save);
api.put('/blogpost/:id', blog.update);

api.listen(9000, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Your are connected on port`);
})