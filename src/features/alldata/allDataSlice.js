import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allData: null
}
const allDataSlice = createSlice({
    name: "allData",
    initialState,
    reducers:{
        setAllData: (state, action) =>{
            state.allData = action.payload;
        }
    }
})


export const { setAllData } = allDataSlice.actions;
export default allDataSlice.reducer;