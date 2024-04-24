import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newUserFirstName: ""
}

const newUserFirstNameSlice = createSlice({
    name: "newUserFirstName",
    initialState,
    reducers:{
        setNewUserFirstName: (state, action) =>{
            state.newUserFirstName = action.payload;
        }
    }
})

export const { setNewUserFirstName } = newUserFirstNameSlice.actions;
export default newUserFirstNameSlice.reducer;