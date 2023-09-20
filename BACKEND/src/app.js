const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('peticion get');
});

app.post('/', (req, res) => {
    res.send('peticion post');
});

app.listen(3000, ()=> {
    console.log('servidor encendido');
});

