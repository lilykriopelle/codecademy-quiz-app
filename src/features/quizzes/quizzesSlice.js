import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload
      state.quizzes[id] = action.payload
    }
  }
});

export const selectQuizzes = (state) => state.quizzes;
