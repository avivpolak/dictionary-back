import axios from "axios";

exports.fetchWord = async (word) => {
    try {
        console.log(word)
        const response = await axios.get(`https://cyjh92ance.execute-api.us-east-1.amazonaws.com/word/${word}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error("no data found")
    } catch (error) {
        throw new Error(error)
    }
};

exports.fetchWordFromPos = async (word, pos) => {
    try {
        const response = await axios.get(`http://localhost:3000/${word}/${pos}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error("no data found")
    } catch (error) {
        throw new Error(error)
    }
};
exports.fetchPos = async (pos) => {
    try {
        const response = await axios.get(`http://localhost:3000//part-of-speech/${pos}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error("no data found")
    } catch (error) {
        throw new Error(error)
    }
};
