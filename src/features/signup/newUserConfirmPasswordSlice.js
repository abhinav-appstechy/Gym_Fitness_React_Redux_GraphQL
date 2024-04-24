import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newUserConfirmPassword: ""
}

const newUserConfirmPasswordSlice = createSlice({
    name: "newUserConfirmPassword",
    initialState,
    reducers:{
        setNewUserConfirmPassword: (state, action) =>{
            state.newUserConfirmPassword = action.payload;
        }
    }
})

export const { setNewUserConfirmPassword } = newUserConfirmPasswordSlice.actions;
export default newUserConfirmPasswordSlice.reducer;