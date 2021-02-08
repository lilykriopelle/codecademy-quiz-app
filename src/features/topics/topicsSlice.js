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
    },
    addQuizIdForTopic: (state, action) => {
      const { topicId, quizId } = action.payload
      state.topics[topicId].quizIds.push(quizId)
    }
  }
});

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer
