//slice //reducer //dispatch // initial state //store 

import {createSlice} from "@reduxjs/toolkit" ;


const initialState = {
    count : 0
}


const counterSlice = createSlice({
    initialState ,
    name : 'counter' ,
    reducers : {
        increment : function(state){
          state.count += 1 ;
        }
    }
})

export default counterSlice.reducer ;
export const {increment} = counterSlice.actions
