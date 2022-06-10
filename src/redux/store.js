import { configureStore } from '@reduxjs/toolkit';
import wordSlice from './wordSlice';

export const store = configureStore({
  reducer: {
    word: wordSlice,
  },
});