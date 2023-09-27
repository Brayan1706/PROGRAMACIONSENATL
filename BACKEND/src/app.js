








// === db ==

connection.connect((err) => {
    if(err) throw err;
    console.log('BD conectada');
});

//const querySQL = 'SHOW TABLES;';

//connection.query(querySQL, (err, res) => {
   // if (err) throw err;
    //console.log('respuesta sql', res);
//});

const insertQuery = `INSERT INTO user(firt_name, age) VALUES ('Juan', 38);`;

connection.query(insertQuery, (err, res) => {
    if (err) throw err;
    console.log('respuesta sql', res);
});

const getQuery = `SELECT * FROM user;`;

connection.query(getQuery, (err, res) =>{
    if (err) throw err;
    console.log('respuesta get', res);

});


app.listen(3000, ()=> {
    console.log('servidor encendido');
});

