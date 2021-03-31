
const connect = require('../services/connect');

exports.salva = async (req, res, next) => {
    const busca = await connect.post('/estoque', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.lista = async (req, res, next) => {
    const busca = await connect.post('/estoque/lista', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.deleta = async (req, res, next) => {
    const busca = await connect.delete('/estoque/' + req.params.id, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}
