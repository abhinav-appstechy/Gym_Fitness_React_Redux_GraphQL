import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserLoggedIn: false
}

const isUserLoggedInSlice = createSlice({
    name: "isUserLoggedIn",
    initialState,
    reducers:{
        setIsUserLoggedIn: (state, action) =>{
            state.isUserLoggedIn = action.payload;
        }
    }
})

export const { setIsUserLoggedIn } = isUserLoggedInSlice.actions;
export default isUserLoggedInSlice.reducer;