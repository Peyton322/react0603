import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import textReducer from "./MyTextSlice"
import addReducer from './addSlice'
import subReducer from './subSlice'
import divReducer from './divSlice'
export default configureStore({
    reducer: {
        counter : counterReducer,
        text:textReducer,
        add:addReducer,
        sub:subReducer,
        div:divReducer
    },
})