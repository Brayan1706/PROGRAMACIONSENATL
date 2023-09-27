const { Router } = require('express');

const router = Router()

router.get('/:name/:id', (req, res) => {
    const { name, id } = req.params;

    res.send(`${name}: ${id}`);
});
router.post('/', (req, res) => {
    const { email, password} = req.body;
    res.send(`${email}: ${password}`);
});
router.put('/', (req, res) => {
    res.send('peticion put');
});
router.delete('/', (req, res) => {
    res.send('peticion delete');
});

module.exports = router;