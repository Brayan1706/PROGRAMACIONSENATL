const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('peticion get');
});

app.post('/', (req, res) => {
    res.send('peticion post');
});

app.put('/', (req, res) => {
    res.send('peticion put');
});

app.delete('/', (req, res) => {
    res.send('peticion delete');
});

app.listen(3000, ()=> {
    console.log('servidor encendido');
});

