const express = require('express');
const bodyParser = require('body-parser');
const books = require('./handlers/books');

const api = express();

api.use(bodyParser.json());

// Create routes

api.get('/books', books.getAll);
api.get('/books/:id', books.getOne);
api.post('/books', books.save);
api.put('/books/:id', books.update);
api.patch('/books/:id', books.updatePartial);
api.delete('/books/:id', books.remove);


api.listen(900, err => {
    if (err) {
        return console.error(err);
    }
    console.log("Server started on port 9000");

})