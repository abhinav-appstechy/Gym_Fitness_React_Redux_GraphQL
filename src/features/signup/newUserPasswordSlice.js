import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newUserPassword: ""
}

const newUserPasswordSlice = createSlice({
    name: "newUserPassword",
    initialState,
    reducers:{
        setNewUserPassword: (state, action) =>{
            state.newUserPassword = action.payload;
        }
    }
})

export const { setNewUserPassword } = newUserPasswordSlice.actions;
export default newUserPasswordSlice.reducer;