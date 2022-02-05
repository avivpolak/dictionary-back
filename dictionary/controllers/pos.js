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
            let filtered = defenitions
            if (pos !== "random") {//if pos is provided, else return a random from all 
                filtered= defenitions.filter((def) =>
                    Object.keys(def.value).includes(pos)
                );
                console.log("1",filtered);
            }
            console.log("1.5",filtered);
            if (req.query.letter) {
                filtered = filtered.filter((def) =>
                    def.word.startsWith(req.query.letter.toUpperCase())
                );
                console.log("2",filtered);
            }
            console.log("3",filtered);
            if (filtered.length === 0) {
                return res.status(404).send("no word in db for this search");
            }

            //getting random word
            const rand = Math.floor(Math.random() * filtered.length);

            return res.status(200).json({ data: filtered[rand] });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getOptionsForRandom = async (req, res, next) => {
    try {
        // getting all defs from scan table
        const defenitions = await scanTable(scanParams(10));

        const differentPosAndOptions = {};
        defenitions.forEach((def) => {
            const { word, value } = def;
            const firstLetter = word[0];

            for (let pos of Object.keys(value)) {
                if (!differentPosAndOptions[pos]) {
                    differentPosAndOptions[pos] = [];
                }
                if (!differentPosAndOptions[pos].includes(firstLetter)) {
                    differentPosAndOptions[pos].push(firstLetter);
                } else {
                    differentPosAndOptions[pos] = [firstLetter];
                }
            }
        });
        return res.status(200).json({ differentPosAndOptions });
    } catch (error) {
        next(error);
    }
};
