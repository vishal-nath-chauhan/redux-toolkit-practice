import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice"
export const store=configureStore({
    reducer:{ // we can have multiple reducers here 
        counter:counterReducer  //counter is the name given to the reducer,we can call it anything
    }
})