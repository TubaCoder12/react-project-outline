import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cards: [{ id: 1, text: "hello world!" }],
};

export const userSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const card = {
        id: nanoid(),
        text: action.payload,
      };
      state.cards.push(card);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    updateCard: (state, action) => {
      const { id, newText } = action.payload;
      const card = state.cards.find((card) => card.id === id);
      if (card) {
        card.text = newText;
      }
    },
  },
});

export const { addCard, removeCard, updateCard } = userSlice.actions;
export default userSlice.reducer;
