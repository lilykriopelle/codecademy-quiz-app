import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name } = action.payload
      state.topics[id] = {
        id: id,
        name: name,
        quizIds: []
      }
    }
  }
});

export const { addTopic } = topicsSlice.actions
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer
