import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice.js'
import roleReducer from './slice/roleSlice.js'
import flatReducer from './slice/flatSlice.js'
import userReducer from './slice/userSlice.js'


const store = configureStore({
    reducer : {
    auth : authReducer,
    role : roleReducer,
    flat : flatReducer,
    user : userReducer
    }
})


export default store;