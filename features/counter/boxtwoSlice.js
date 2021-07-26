import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const boxtwoSlice = createSlice({
  name: 'boxtwo',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if(state.value <= 0){
        state.value += 0;
      }else{
        state.value -= 1

      }
      
    },
    type: (state, action) => {
      if(isNaN(action.payload)){
        state.value = 0
      }else{
        state.value = parseInt(action.payload)
      }
       
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, type } = boxtwoSlice.actions

export default boxtwoSlice.reducer