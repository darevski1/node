const db = require("./pkg/db");
const express = require("express");
const blog = require('./handlers/blog');
const bodyParser = require("body-parser");

const api = express();
api.use(bodyParser.json());

// Routes
api.get('/blog', blog.getAll);
api.get('/blog/:id', blog.getOne);
api.get('/blog/search', blog.search);
api.post('/blog', blog.save);
api.put('/blog/:id', blog.update);
api.delete('/blog/:id', blog.remove);



api.listen(9000, () => {
    console.log("Server successfully started")
})