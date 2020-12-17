const express = require("express");
const bodyParser = require(bodyParser);
const users = require('./handlers/users');
const books = require('./handlers/books');
const api = express();


api.use.bodyParser.json();


api.get('/users', users.getAll);
api.get('/users/:id', users.getOne);
api.post('/users', users.save);
api.put('/users', users.update);
api.patch('/users', users.updatePartial);
api.delete('/users', users.remove);

api.get('/books', books.getAll);
api.get('/books/:id', books.getOne);
api.post('/books', books.save);
api.put('/books', books.update);
api.patch('/books', books.updatePartial);
api.delete('/books', books.remove);


// Start app on port 9000
api.listen(9000, err => {
    if (err) {
        console.log(err)
    }
    console.log('Server started at port 9000');
})