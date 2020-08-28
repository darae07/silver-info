const { AppList } = require('../../models');

module.exports = {
    get: async (req, res) => {
        let lists = await AppList.findAll({

        });

        console.log(lists);
        res.status(200).json(lists);
    }
};
