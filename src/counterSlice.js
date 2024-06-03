import { createSlice } from "@reduxjs/toolkit";

export const counterslice = createSlice({
    name: 'counter',
    initialState:{
        value:0
    },
    reducers:{
        mul:(state,action) => {
            state.value = action.payload.multiplier * action.payload.multiplicand * action.payload.multiplicand2;
        }
        
    },
    
})

export const {mul} = counterslice.actions

export default counterslice.reducer