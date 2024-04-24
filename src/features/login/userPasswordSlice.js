import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userPassword: ""
}

const userPasswordSlice = createSlice({
    name: "userPassword",
    initialState,
    reducers:{
        setUserPassword: (state, action) =>{
            state.userPassword = action.payload;
        }
    }
})

export const { setUserPassword } = userPasswordSlice.actions;
export default userPasswordSlice.reducer;