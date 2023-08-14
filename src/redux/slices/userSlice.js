import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const asyncState = AsyncStorage.getItem('isLoggedIn').then((res) => {
  return res;
});

const initialState = {
  isLoggedIn: Boolean(asyncState)
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    }
  }
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
