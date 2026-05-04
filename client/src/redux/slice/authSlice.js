import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  loading: false,
  message: null,
};

export const login = createAsyncThunk(
  '/auth_login',
  async ({ formData }, thunkApi) => {
    try {
      console.log(formData);
      console.log(thunkApi);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
        console.log(error)
   return thunkApi.rejectWithValue(error)
    }
  }
);

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      }).addCase(login.rejected , (state,action)=>{
        console.log(action)
      })
  },
});

export default authSlice.reducer;

//state variable fetch  //set

//api calling => async operation  thunks
