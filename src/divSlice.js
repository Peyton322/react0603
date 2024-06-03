import { createSlice } from "@reduxjs/toolkit";

export const divslice = createSlice({
    name: 'div',
    initialState:{
        value4:0
    },
    reducers:{
        div:(state,action) => {
            state.value4 = Number(action.payload.divend) / Number(action.payload.divand)
        }
        
    },
    
})

export const {div} = divslice.actions

export default divslice.reducer