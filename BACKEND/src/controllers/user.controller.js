const { query } = require('express');
const database = require('../config/database');
const mysql2 = require('mysql2');

const readUser = (req, res) => {
    const { id } = req.params;
    const readQuery = `SELECT * FROM user WHERE id=?;`;

    const query = mysql2.format(readQuery, [id]);
    database.query(query, (err, result) =>{
        if(err) throw err;
        if (result[0] !== undefined){
            res.json(result[0]);
        }else{
          res.json({ message: 'Usuario no encontrado'})  ;
        }
    });
};
const createUser = (req, res) => {
const { firt_name, age} = req.body;

const createQuery = `INSERT INTO user(firt_name, age) VALUE (?, ?)`;

const query = mysql2.format(createQuery, [firt_name, age]);

database.query(query, (err, result) =>{
    if(err) throw err;
    //console.log(result);
    res.send({message: 'Usuario creado'});
});
};

const updateUser = (req, res) => {
    res.send('peticion put');
};

const deleteUser = (req, res) => {
    res.send('peticion delete');
};

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
};