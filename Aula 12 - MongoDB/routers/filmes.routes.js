const express = require ('express');
const router = express();

router.get('/', (req, res) => {
    res.send("rota ok");
});

router.post('/add', (req, res) => {
    res.send("rota add filme");
});

router.put('/update', (req, res) => {
    res.send("rota update filme");
});

router.delete('/delete', (req, res) => {
    res.send("rota delete filme");
});

module.exports = router;