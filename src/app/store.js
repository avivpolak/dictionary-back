/** @format */

import { configureStore ,applyMiddleware } from "@reduxjs/toolkit";
import wordReducer from "../features/word/wordSlice.ts";
import { fetchWord } from "../middlewere.js";
export const store = configureStore({
  reducer: {
    wordReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchWord),
});

export default store;
