import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}

export const dataReducer=createSlice({
    name:"vishal", //just a name of this thing
    initialState,
    reducers:{     //this name can't be changed
        increment:(state)=>{
            state.value+=1
        }
,
        decrement:(state)=>{
            state.value-=1
        },

        incrementByAmount:(state,action)=>{
            state.value+=action.payload
        }

    }
})

export const {increment,decrement,incrementByAmount}=dataReducer.actions;

export default dataReducer.reducer;