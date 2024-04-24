import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newUserCompanyName: ""
}

const newUserCompanyNameSlice = createSlice({
    name: "newUserCompanyName",
    initialState,
    reducers:{
        setNewUserCompanyName: (state, action) =>{
            state.newUserCompanyName = action.payload;
        }
    }
})

export const { setNewUserCompanyName } = newUserCompanyNameSlice.actions;
export default newUserCompanyNameSlice.reducer;