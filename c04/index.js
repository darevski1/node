
// REST is acronym for REpresentational State Transfer. 
// POST, GET *(PUT< PATCH< DELETE)
// GET - koga sakame da prevzmeme ppodatoci
// POST - koaga sakame
// PUT - sluzi za azuirianje na celosen podatok (Site polinja od ednash)
// PATCH - za delumno azurianje na podatok (samo edno pole)


// REST endpoint - pateki do podatocina veb serverot
const express = require('express');
const bodyParser = require('body-parser');

let usersData = [];

const api = express();

api.use(bodyParser.json()); // ni ovozmozuva da citame podatoci od json

api.post('/users', (req, res) => {
    usersData = [...usersData, req.body];
    res.status(200).send(req.body);
});
api.get('/users', (req, res) => {
    res.status(200).send(usersData);
});
api.get('/users/:id', (req, res) => {
    if (!usersData[req.params.id]) {
        return res.status(404).send('Not found');
    }
    res.status(200).send(usersData[req.params.id]);
});
api.put('/users/:id', (req, res) => {
    if (!usersData[req.params.id]) {
        return res.status(404).send('Not found');
    }

});
api.patch('/users/:id', (req, res) => {
    res.send("patch Ok");
});
api.delete('/users/:id', (req, res) => {
    if (!usersData[req.params.id]) {
        return res.status(404).send('Not found');
    }
});

api.listen(9000, err => {
    if (err) {
        return console.log(err)
    }
    console.log('Success port 9000');
})