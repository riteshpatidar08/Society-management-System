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
            console.log(state.count)
          state.count += 1 ;
        }
    }
})

//what is the typeof counterSlice variable ?


export default counterSlice.reducer ;
export const {increment} = counterSlice.actions

console.log(counterSlice)


