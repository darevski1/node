var mongoose = require('mongoose');


// create db connection

mongoose.connect('mongodb+srv://darevski:Banana007@vodno.kkcro.mongodb.net/Vodno?retryWrites=true&w=majority', { useNewUrlParser: true });

// check if db is connected

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connestion error'));
db.once('open', function () {
    console.log('Connected succesfull');
})

module.exports = mongoose;