import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newUserPhoneNumber: ""
}

const newUserPhoneNumberSlice = createSlice({
    name: "newUserPhoneNumber",
    initialState,
    reducers:{
        setNewUserPhoneNumber: (state, action) =>{
            state.newUserPhoneNumber = action.payload;
        }
    }
})

export const { setNewUserPhoneNumber } = newUserPhoneNumberSlice.actions;
export default newUserPhoneNumberSlice.reducer;