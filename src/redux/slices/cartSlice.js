import {createSlice} from '@reduxjs/toolkit';


const cartslice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        additem:(state,action)=>{
            state.push(action.payload);
        },
    },
});

export const {additem} =cartslice.actions;

export default cartslice.reducer;