import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice"
import boxtwoReducer from "../features/counter/boxtwoSlice"
import boxthreeReducer from "../features/counter/boxthreeSlice"

export const store = configureStore({
  reducer: {
      counter:counterReducer,
      boxtwo:boxtwoReducer,
      boxthree:boxthreeReducer,

  },
})