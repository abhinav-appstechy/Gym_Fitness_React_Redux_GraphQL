import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newUserLastName: ""
}

const newUserLastNameSlice = createSlice({
    name: "newUserLastName",
    initialState,
    reducers:{
        setNewUserLastName: (state, action) =>{
            state.newUserLastName = action.payload;
        }
    }
})

export const { setNewUserLastName } = newUserLastNameSlice.actions;
export default newUserLastNameSlice.reducer;