import { createSlice } from '@reduxjs/toolkit';
import randomWords from 'random-words';

export const wordSlice = createSlice({
  name: 'word',
  initialState: {
    randomWords: randomWords,
    numberWords: 120,
    timeSecond: 60,
    cpm: 0,
    wpm:0,
    mistakes:0,
  },
  reducers: {
    incrementTotal: (state) => {
      state.wpm++;
    },
    incrementCpm: (state) => {
      state.cpm++;
    },
    incrementMistakes: (state) => {
      state.mistakes++;
    }
  },
});

export const { incrementTotal, incrementCpm, incrementMistakes } = wordSlice.actions;
export default wordSlice.reducer;