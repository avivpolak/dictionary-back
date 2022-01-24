/** @format */
import { createSlice } from "@reduxjs/toolkit";

interface Word {
  word: string;
  pos: Pos;
  defenitions: string[];
  synonym: string[];
}
enum Pos {
  "n." = 1,
  "prep.",
  "a.",
  "v.",
  "adv.",
  "p.",
  "interj.",
  "conj.",
  "pron.",
}
const initialState: Word = {
  pos: 1,
  synonym: [
    "give up",
    " yield",
    " forego",
    " cede",
    " surrender",
    " resign",
    " abdicate",
    " quit",
    " relinquish",
    " renounce",
    " desert",
    " forsake",
    " leave",
    " retire",
    " withdraw from. Abandon",
    " Desert",
    " Forsake. These words agree in representing a person as giving up or leaving some object",
    " but differ as to the mode of doing it. The distinctive sense of abandon is that of giving up a thing absolutely and finally",
    " as, to abandon one's friends, places, opinions, good or evil habits, a hopeless enterprise, a shipwrecked vessel. Abandon is more widely applicable than forsake or desert. The Latin original of desert appears to have been originally applied to the case of deserters from military service. Hence, the verb, when used of persons in the active voice, has usually or always a bad sense, implying some breach of fidelity, honor, etc., the leaving of something which the person should rightfully stand by and support; as, to desert one's colors, to desert one's post, to desert one's principles or duty. When used in the passive, the sense is not necessarily bad; as, the fields were deserted, a deserted village, deserted halls. Forsake implies the breaking off of previous habit, association, personal connection, or that the thing left had been familiar or frequented; as, to forsake old friends, to forsake the paths of rectitude, the blood forsook his cheeks. It may be used either in a good or in a bad sense.",
  ],
  word: "ABANDON",
  defenitions: [
    "To cast or drive out; to banish; to expel; to reject. [Obs.] That he might . . . abandon them from him. Udall. Being all this time abandoned from your bed. Shak.",
    "To give up absolutely; to forsake entirely ; to renounce utterly; to relinquish all connection with or concern on; to desert, as a person to whom one owes allegiance or fidelity; to quit; to surrender. Hope was overthrown, yet could not be abandoned. I. Taylor.",
    "Reflexively : To give (one's self) up without attempt at self- control ; to yield (one's self) unrestrainedly ; -- often in a bad sense. He abandoned himself . . . to his favorite vice. Macaulay.",
    "To relinquish all claim to; -- used when an insured person gives up to underwriters all claim to the property covered by a policy, which may remain after loss or damage by a peril insured against.",
  ],
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    updateWord: (state, action) => {
      const { word, pos, defenitions, synonym } = action.payload;
      state = { word, pos, defenitions, synonym };
    },
  },
});

export const { updateWord } = wordSlice.actions;
export const selectword = (state) => state.word;
export default wordSlice.reducer;
