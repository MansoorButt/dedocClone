import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:{
    address:null,
    name:''
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
