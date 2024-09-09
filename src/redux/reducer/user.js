import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    isLoggedIn: false,
  },
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {setUserData, setIsLoggedIn} = userSlice.actions;
export default userSlice.reducer;
