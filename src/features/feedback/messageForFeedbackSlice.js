import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messageForFeedback: ""
}
const messageForFeedbackSlice = createSlice({
    name: "messageForFeedback",
    initialState,
    reducers:{
        setMessageForFeedback: (state, action) =>{
            state.messageForFeedback = action.payload;
        }
    }
})


export const { setMessageForFeedback } = messageForFeedbackSlice.actions;
export default messageForFeedbackSlice.reducer;