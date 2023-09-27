//CRUD

const readUser = (req, res) => {
    const { name, id } = req.params;

    console.log('desde el controlador');

    res.send(`${name}: ${id}`);
};

const createUser = (req, res) => {
const { email, password} = req.body;
res.send(`${email}: ${password}`);
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