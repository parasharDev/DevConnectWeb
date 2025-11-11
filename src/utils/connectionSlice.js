import { createSlice } from "@reduxjs/toolkit";

const connectionSliec = createSlice({
    name:'connections',
    initialState:null,
    reducers:{
        addConnections:(state,action)=> action.payload,
        removeConnections:()=> null
    }
})

export const {addConnections,removeConnections} = connectionSliec.actions;
export default connectionSliec.reducer;