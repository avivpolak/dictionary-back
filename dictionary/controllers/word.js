const { getItem } = require("../helpers/dynamoDbActions");
const { queryParams } = require("../helpers/dynamoDbParams");

exports.getWord = async (req, res, next) => {
    try {
        const { word } = req.params;
        const defenition = await getItem(queryParams(word));
        if (defenition) {
            const { word, value } = defenition;
            return res.json({ word, value });
        } else {
            return res
                .status(404)
                .json({ error: 'Could not find word with provided "word"' });
        }
    } catch (error) {
        next(error);
    }
};
