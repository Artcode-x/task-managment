/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  flag: false
}

const reducersSlice = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    setFlag: (state, action) => {
      state.flag = action.payload
    }
  }
})

export const { setFlag } = reducersSlice.actions
export default reducersSlice.reducer
