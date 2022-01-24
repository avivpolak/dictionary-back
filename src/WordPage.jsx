/** @format */

import { useParams } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";
import { useEffect } from "react";
import { updateWord } from "./features/word/wordSlice.ts";
import axios from "axios";
// export const fetchWord =
//     (word) => async (dispatch, getState, extraArgument) => {
//         try {
//             const { data, status } = await axios.get(
//                 `https://cyjh92ance.execute-api.us-east-1.amazonaws.com/word/${word}`
//             );
//             if (status === 200) {
//                 console.log(data)
//                 dispatch(updateWord(data));
//             }
//             throw new Error("no data found");
//         } catch (error) {
//             throw new Error(error);
//         }
//     };

// const fetchWordFromPos = async (word, pos) => {
//     try {
//         const response = await axios.get(
//             `http://localhost:3000/${word}/${pos}`
//         );
//         if (response.status === 200) {
//             return response.data;
//         }
//         throw new Error("no data found");
//     } catch (error) {
//         throw new Error(error);
//     }
// };
// const fetchPos = async (pos) => {
//     try {
//         const response = await axios.get(
//             `http://localhost:3000//part-of-speech/${pos}`
//         );
//         if (response.status === 200) {
//             return response.data;
//         }
//         throw new Error("no data found");
//     } catch (error) {
//         throw new Error(error);
//     }
// };
const fetchWord=async(word)=>{
try {
    console.log("hi this is jeff")
    const { data, status } = await axios.get(
        `https://cyjh92ance.execute-api.us-east-1.amazonaws.com/word/${word}`
    );
    if (status === 200) {
    return data
    }
    throw new Error("no data found");
} catch (error) {
    throw new Error(error);
}
}
export default function WordPage() {
    const dispach = useDispatch();
    const param = useParams();
    const wordParam = param.word;
    let posParam = param.pos;
    // useEffect(() => {
    //     const wordParam = param.word;
    //     let posParam = param.pos;
    //     dispach(updateWord({word:"shi"}));
    // }, []);
    
    if (!posParam) posParam = "";
    const store = useStore().getState(); //use selector didnt work ...
    const { word, pos, defenitions, synonym } = store.wordReducer;
fetchWord(wordParam).then((data)=>{console.log(data)})
    return (
        <div className="Word">
            {wordParam}
            <br />
            {posParam}
            <br />
            {word}
            <br />
            {pos}
            <br />
            {defenitions}
            <br />
            {synonym}
            <br />
        </div>
    );
}
