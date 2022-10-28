const Flag = require('../schemas/flag');

function getFlags(req, res) {
    Flag.find({}, (err, flag) => {
        if (err) return res.status(500).send({ err });
        
        return res.status(200).send(flag);
    });
};

module.exports = {
    getFlags
};