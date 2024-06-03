import { createSlice } from "@reduxjs/toolkit";

export const textslice = createSlice({
    name: 'text',
    initialState:{
        value:"empty"
    },
    reducers:{
        updateText:(state,action) =>{
            state.value = action.payload
        }
    },
    
})

export const {updateText} = textslice.actions

export default textslice.reducer