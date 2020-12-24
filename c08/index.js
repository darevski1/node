const cfg = require("./pkg/config");
require("./pkg/db");
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('express-jwt');
const auth = require("./handlers/auth");
const movies = require("./handlers/movies");
// const songs = require("../pkg/songs");
const api = express();
api.use(bodyParser.json());




api.use(jwt({
    secret: cfg.get('server').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        { url: '/api/v1/auth', methods: ['POST'] },
        { url: '/api/v1/auth/login', methods: ['POST'] },
        { url: '/api/v1/auth/forgot-password', methods: ['POST'] },
        { url: '/api/v1/auth/reset-password', methods: ['POST'] },
        { url: '/api/v1/auth/movies', methods: ['POST'] },
        { url: '/api/v1/auth/movies', methods: ['GET'] },
    ]
}));
api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad JWT');
    }
});


// create body account (User Regetration )
api.post("/api/v1/auth", auth.create);

// User login
api.post("/api/v1/auth/login", auth.login);

// Refresh user token
api.get("/api/v1/auth/refresh-token", auth.refreshToken);

// * forgot password
api.get("/api/v1/auth/fogot-password", auth.forgotPassword);
// * reset password
api.get("/api/v1/auth/reset-password", auth.resetPassword);
// * change password
api.post("/api/v1/auth/change-password", auth.changePassword);
// List all users accounts
api.get("/api/v1/auth/accounts", auth.listAccounts);

// add new movie
api.get("/api/v1/auth/movies", movies.save);
api.post("/api/v1/auth/movies", movies.getAll);
// songs routes

// api.get("/api/v1/auth/songs", songs.getAll);
// api.get("/api/v1/auth/songs", songs.getOne);
// api.post("/api/v1/auth/songs", songs.save);
// api.patch("/api/v1/auth/songs", songs.update);
// api.delete("/api/v1/auth/songs", songs.remove);




api.listen(cfg.get('server').port, err => {
    if (err) {
        return console.error(err);
    }
    console.log(`Server successfully started on port ${cfg.get('server').port}`);
});