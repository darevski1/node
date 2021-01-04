const express = require('express');
const app = express();
const morgan = require('morgan')




// Middlewares
app.use(morgan('dev'))
// Routes 
app.get('/', (req, res) => {
    res.status(200).json({
        message: "You request index page"
    })
})
// Catch 404 error
app.use((req, res, next) => {
    const err = new Error('Not FOund');
    err.status = 404;
    next(err)
})


// eror handling function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;


    // Response to client 
    res.status(status).json({
        error: {
            message: error.message
        }
    })

    // Response 
    console.error(err)

})

// Start server
const port = app.get('port') || 3000;
app.listen(port, () => console.log(`The server is running on port ${port}`))
