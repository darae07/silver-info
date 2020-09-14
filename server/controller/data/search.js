const { AppList } = require('../../models');
const request = require('request');

const SEARCH_API_KEY = process.env.SEARCH_API_KEY;
const SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID;

module.exports = {
    get: async (req, res) => {
        const query = req.query.searchWord;
        await request.get(
            `https://www.googleapis.com/customsearch/v1?key=${SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${query}`,
            (err, respnse, body) => {
                let jsonBody = JSON.parse(body);
                res.json(jsonBody['items'][0]['formattedUrl']);
            }
        )
    }
};
