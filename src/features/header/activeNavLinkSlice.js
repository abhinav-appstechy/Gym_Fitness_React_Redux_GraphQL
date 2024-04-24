import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeNavLink: "Home"
}
const activeNavLinkSlice = createSlice({
    name: "activeNavLink",
    initialState,
    reducers:{
        setActiveNavLink: (state, action) =>{
            state.activeNavLink = action.payload;
        }
    }
})


export const { setActiveNavLink } = activeNavLinkSlice.actions;
export default activeNavLinkSlice.reducer;