const cfg = require("./pkg/config");
require("./pkg/db");
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('express-jwt');
const auth = require("./handlers/auth");
const api = express();
api.use(bodyParser.json());
api.use(jwt({ secret: cfg.get('server').jwt_key }));






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



api.listen(cfg.get('server').port, err => {
    if (err) {
        return console.error(err);
    }
    console.log(`Server successfully started on port ${cfg.get('server').port}`);
});