const express = require("express");
const app = express();
const loger = require("morgan");

// Middleware
app.use(logger('dev'));

//Routes


//Catch error 404 and forvard them to error handler
app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;

    next(err);
});
// error handler function

app.use((err, req, res, next) => {
    const error = app.get("env") === "development" ? err : {};
    const status = err.status || 500;
})

// Response to client
res.sttus(status).json({
    error: {
        message: error_message
    }
})

// Start server
const port = app.get('port')! | 3000;
app.listen()