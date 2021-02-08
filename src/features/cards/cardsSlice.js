import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload
      state.cards[id] = action.payload
    },
    deleteCard: (state, action) => {
      const { id } = action.payload
      delete state.cards[id]
    }
  }
});

export const { addCard, deleteCard } = cardsSlice.actions
export const selectCards = (state) => state.cards.cards;
export default cardsSlice.reducer
