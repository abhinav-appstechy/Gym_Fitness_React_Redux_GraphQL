import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailForFeedback: ""
}
const emailForFeedbackSlice = createSlice({
    name: "emailForFeedback",
    initialState,
    reducers:{
        setEmailForFeedback: (state, action) =>{
            state.emailForFeedback = action.payload;
        }
    }
})


export const { setEmailForFeedback } = emailForFeedbackSlice.actions;
export default emailForFeedbackSlice.reducer;