import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userEmail: ""
}

const userEmailSlice = createSlice({
    name: "userEmail",
    initialState,
    reducers:{
        setUserEmail: (state, action) =>{
            state.userEmail = action.payload;
        }
    }
})

export const { setUserEmail } = userEmailSlice.actions;
export default userEmailSlice.reducer;