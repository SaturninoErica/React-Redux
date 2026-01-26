import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: Number(localStorage.getItem('counter')) || 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
      localStorage.setItem('counter', state.value)
    },
    decrement(state) {
      state.value -= 1
      localStorage.setItem('counter', state.value)
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
