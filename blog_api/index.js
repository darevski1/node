const cfg = require('./pkg/config');
require('./pkg/db');


const express = require("express");
const jwt = require('express-jwt');
const blog = require('./handlers/blog');
const auth = require('./handlers/auth');
const bodyParser = require("body-parser");

const api = express();
api.use(bodyParser.json());

api.use(jwt({
    secret: cfg.get('server').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        // { url: '/blog', methods: ['POST'] },
        { url: '/api/v1/blog', methods: ['GET'] },
        { url: '/api/v1/auth/login', methods: ['POST'] },
        { url: '/api/v1/auth', methods: ['POST'] },

    ]
}));
api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad JWT');
    }
});

// Routes
api.post('/api/v1/blog', blog.save);
api.get('/api/v1/blog', blog.getAll);
api.get('/api/v1/blog/:id', blog.getOne);
api.get('/api/v1/blog/search/:tags', blog.search);
api.put('/api/v1/blog/:id', blog.update);
api.delete('/api/v1/blog/:id', blog.remove);

api.post('/api/v1/auth', auth.create);
api.post('/api/v1/auth/login', auth.login);


api.listen(cfg.get('server').port, err => {
    if (err) {
        return console.error('Could not start server:', err);
    }
    console.log('Server successfully started on port', cfg.get('server').port);
});