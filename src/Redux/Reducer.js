import { createSlice, legacy_createStore } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";


export const CounterSlice = createSlice({
    
    name: 'counter',
    initialState: { 
        
        value : 0

      },
    reducers: {
        inc: (state) => {
            state.value += 1

            
        },
        dec: (state) => {
            state.value -= 1
        },
        

    },
})

export const {inc,dec}=CounterSlice.actions
export const selectCount =(state) => state.counter.value
export default CounterSlice.reducer