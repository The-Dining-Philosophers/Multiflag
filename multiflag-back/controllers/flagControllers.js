const Flag = require('../schemas/flag');

function getFlags(req, res) {
    Flag.find({}, (err, flag) => {
        if (err) return res.status(500).send({ err });
        
        return res.status(200).send(flag);
    });
};

function postFlag(req, res) {
    const flag = new Flag(req.body);

    Flag.create(flag, (err) => {
        if (err) return res.status(500).send({ message: `Error creating flag: ${err}`});

        return res.status(200).send({ messasge: 'Flag created successfully'});
    });
}

module.exports = {
    getFlags,
    postFlag
};