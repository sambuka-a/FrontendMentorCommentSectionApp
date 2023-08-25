import { createSlice } from "@reduxjs/toolkit";

import { users } from "../../mock/data";

const initialState = users

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setActiveUser(state, action) {
      state.map(user => user.currentUser = false)
      const existingUser = state.find(user => user.id === action.payload)
      if(existingUser) {existingUser.currentUser = true}
    }
  }
})

export const {setActiveUser} = usersSlice.actions

export const selectAllUsers = state => state.users

export default usersSlice.reducer