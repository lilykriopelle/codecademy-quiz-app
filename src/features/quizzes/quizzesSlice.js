import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
});

export const selectQuizzes = (state) => state.quizzes;
