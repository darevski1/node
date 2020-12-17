const mongoose = require("mongoose");


let username = 'darevski';
let password = 'Banana007';
let dbname = 'blog';


let dsn = `mongodb+srv://${username}:${password}@vodno.kkcro.mongodb.net/${dbname}?retryWrites=true&w=majority`;


mongoose.connect(dsn, {

    useNewUrlParser: true,
    useUnifiedTopology: true

});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    return console.log("Yes we are connected");
});