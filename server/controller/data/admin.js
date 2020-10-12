const { Articles } = require('../../models');

module.exports = {
    post: (req, res) => {
        let { title, text } = req.body;
        Articles.create({
            title,
            text
        }).then((data) => {
            res.status(200).end(data.id);
        })
    }
};
