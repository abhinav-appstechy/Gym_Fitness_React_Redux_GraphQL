import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newUserEmail: ""
}

const newUserEmailSlice = createSlice({
    name: "newUserEmail",
    initialState,
    reducers:{
        setNewUserEmail: (state, action) =>{
            state.newUserEmail = action.payload;
        }
    }
})

export const { setNewUserEmail } = newUserEmailSlice.actions;
export default newUserEmailSlice.reducer;