const express = require('express');

const app = express();


app.get('/:name/:id', (req, res) => {
    const { name, id } = req.params;

    res.send(`${name}: ${id}`);
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

