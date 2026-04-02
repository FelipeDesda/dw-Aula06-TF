const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/rota', (req, res) => {
    const nome = req.query.nome;

    res.json({
        mensagem: `Olá, ${nome}! (via GET)`
    });
});

app.post('/rota', (req, res) => {
    const nome = req.body.nome;

    res.json({
        mensagem: `Olá, ${nome}! (via POST)`
    });
});

// Inicia servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 