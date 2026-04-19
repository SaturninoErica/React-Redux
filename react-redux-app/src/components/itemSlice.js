import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likes: 0,
  isFavorite: false,
  ratings: [], // массив чисел, например [5, 4, 3]
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addLike: (state) => {
      state.likes += 1;
    },
    toggleFavorite: (state) => {
      state.isFavorite = !state.isFavorite;
    },
    addRating: (state, action) => {
      // action.payload должен содержать число от 1 до 5
      if (typeof action.payload === 'number') {
        state.ratings.push(action.payload);
      }
    },
  },
});

export const { addLike, toggleFavorite, addRating } = itemSlice.actions;
export default itemSlice.reducer;