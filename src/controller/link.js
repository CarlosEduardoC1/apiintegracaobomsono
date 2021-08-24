const query = require('../../db.json');
const fs = require('fs');

exports.getLink = async (req, res, next) => {
    res.status(200).json({ link: query.db[0].link });
}

exports.atualiza = async (req, res, next) => {
    console.log(req.body);
    query.db[0].link = req.body.link;
    try {
        fs.writeFileSync('./db.json', JSON.stringify(query, null, 4))
        // res.status(200);
    }
    catch {
        res.status(400)
    }
}
