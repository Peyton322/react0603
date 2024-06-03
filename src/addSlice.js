import { createSlice } from "@reduxjs/toolkit";

export const addslice = createSlice({
    name: 'add',
    initialState:{
        value2:0
    },
    reducers:{
        add:(state,action) => {
            state.value2 = Number(action.payload.addend) + Number(action.payload.summand)
        }
        
    },
    
})

export const {add} = addslice.actions

export default addslice.reducer