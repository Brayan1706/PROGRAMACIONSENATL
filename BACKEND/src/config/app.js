const express = require('express');

const app = express();

// middleawares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


module.exports = app;