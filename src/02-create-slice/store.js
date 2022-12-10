import ageReducer from "./ageSlice";
import cashReducer from "./cashSlice";
import { configureStore } from "@reduxjs/toolkit";
import possesionsReducer from "./possessionsSlice";


export const store = configureStore({
    reducer: {
        age: ageReducer,
        cash: cashReducer,
        possessions: possesionsReducer,
    },
});