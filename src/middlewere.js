const axios = require("axios")
const {updateWord} = require("./features/word/wordSlice.ts")
exports.fetchWord =
    (word) => async (dispatch, getState, extraArgument) => {
        try {
            const { data, status } = await axios.get(
                `https://cyjh92ance.execute-api.us-east-1.amazonaws.com/word/${word}`
            );
            if (status === 200) {
                console.log(data)
                dispatch(updateWord(data));
            }
            throw new Error("no data found");
        } catch (error) {
            throw new Error(error);
        }
    };
      