import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import axios from 'axios';

const initialState = {
  loading: false,
  message: null,
  isAuthenticated: false,
  name: null,
  email: null,
  role: null,
  error : null 
};

export const login = createAsyncThunk(
  '/auth_login',
  async ({ formData }, thunkApi) => {
    try {
      console.log(formData);
      console.log(thunkApi);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData,
        {
          withCredentials: true,
        }
      );
      const verifyRes = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/verify`,
        null,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      return { ...res.data, ...verifyRes.data };
    } catch (error) {
      console.log(error.response.data);
      return thunkApi.rejectWithValue(error.response.data);
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
        state.isAuthenticated = action.payload.authenticated;
        const { name, email, role } = action.payload.data;
        state.name = name;
        state.role = role;
        state.email = email;
        Cookies.set('name', name);
        Cookies.set('email', email);
        Cookies.set('role', role);
        Cookies.set('isAuthenticated', action.payload.authenticated);
        console.log(state.email, state.role, state.isAuthenticated, state.name);
        console.log(action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        console.log(action.payload);
      });
  },
});

export default authSlice.reducer;

//state variable fetch  //set

//api calling => async operation  thunks

//redux toolkit working flow  ?
//thunk api toolkit ?
//extraReducer ?


//NOTE assign resident to flat  ;

//user id => client get => flat ki id 
//get unassigned flat  ;
//role fetch => dropdown main user registration form k andar  
//fields => dropdown shows list of unassigned flat ;

//NOTE get available flat

//role slice  thunks
//flat slice  thunks