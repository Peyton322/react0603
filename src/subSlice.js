import { createSlice } from "@reduxjs/toolkit";

export const subslice = createSlice({
    name: 'sub',
    initialState:{
        value3:0
    },
    reducers:{
        sub:(state,action) => {
            state.value3 = Number(action.payload.subend) - Number(action.payload.suband)
        }
        
    },
    
})

export const {sub} = subslice.actions

export default subslice.reducer