import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/authSlice.js'

console.log(counterReducer)
const store = configureStore({
    reducer : {
        counter : counterReducer

    }
})


export default store;