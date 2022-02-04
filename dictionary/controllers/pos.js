const { scanTable } = require("../helpers/dynamoDbActions");
const { scanParams } = require("../helpers/dynamoDbParams");
exports.getRandword = async (req, res, next) => {
    try {
        const { pos } = req.params;
        // getting all defs from scan table
        const defenitions = await scanTable(scanParams(10));
        if (defenitions.length === 0) {
            return res.status(404).send("no word in db");
        } else {
            //filtering out all the defenitions that is not from pos
            const filtered = defenitions.filter((def) =>
                Object.keys(def.value).includes(pos + ".")
            );
            console.log(filtered);
            if (filtered.length === 0)
                return res.status(404).send("no word in db with that pos");
            //getting random word
            const rand = Math.floor(Math.random() * defenitions.length);
            console.log(filtered[rand], rand);
            return res.status(200).json({ data: filtered[rand].word });
        }
    } catch (error) {
        next(error);
    }
};
