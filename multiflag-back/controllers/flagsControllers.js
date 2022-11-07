const Flag = require('../schemas/flag');

function getFlags(req, res) {
    Flag.find({}, (err, flag) => {
        if (err) return res.status(500).send({ err });
        
        return res.status(200).send(flag);
    });
};

function postFlag(req, res) {
    const flag = new Flag(req.body);

    if (!flag.path.startsWith('/'))
        return res.status(422).send({ message: 'Path sould start with the character \'/\''});

    Flag.create(flag, (err) => {
        if (err) return res.status(500).send({ message: `Error creating flag: ${err}`});

        return res.status(200).send({ messasge: 'Flag created successfully'});
    });
}

function getRandomFlag(req, res) {
    Flag.estimatedDocumentCount((err, count) => {
        if (err) return console.log(err);

        const random = Math.floor(Math.random() * count);

        Flag.findOne().skip(random).exec((err, flag) => {
            if (err) return res.status(500).send({ err });

            return res.status(200).send(flag);
        });
    });
}

module.exports = {
    getFlags,
    postFlag,
    getRandomFlag
};