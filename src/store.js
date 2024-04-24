import { configureStore } from "@reduxjs/toolkit";
import activeNavLinkReducer from "./features/header/activeNavLinkSlice";
import userEmailReducer from "./features/login/userEmailSlice";
import userPasswordReducer from "./features/login/userPasswordSlice";
import isUserLoggedInReducer from "./features/login/isUserLoggedInSlice";
import newUserCompanyNameReducer from "./features/signup/newUserCompanyNameSlice";
import newUserEmailReducer from "./features/signup/newUserEmailSlice";
import newUserPasswordReducer from "./features/signup/newUserPasswordSlice";
import newUserConfirmPasswordReducer from "./features/signup/newUserConfirmPasswordSlice";
import newUserPhoneNumberReducer from "./features/signup/newUserPhoneNumberSlice";
import newUserFirstNameReducer from "./features/signup/newUserFirstNameSlice";
import newUserLastNameReducer from "./features/signup/newUserLastNameSlice";
import emailForFeedbackReducer from "./features/feedback/emailForFeedbackSlice";
import messageForFeedbackReducer from "./features/feedback/messageForFeedbackSlice";
import allDataReducer from "./features/alldata/allDataSlice";


export const store = configureStore({
    reducer:{
        activeNavLink: activeNavLinkReducer,
        userEmail: userEmailReducer,
        userPassword: userPasswordReducer,
        isUserLoggedIn: isUserLoggedInReducer,
        newUserCompanyName: newUserCompanyNameReducer,
        newUserEmail: newUserEmailReducer,
        newUserPassword: newUserPasswordReducer,
        newUserConfirmPassword: newUserConfirmPasswordReducer,
        newUserPhoneNumber: newUserPhoneNumberReducer,
        newUserFirstName: newUserFirstNameReducer,
        newUserLastName: newUserLastNameReducer,
        emailForFeedback: emailForFeedbackReducer,
        messageForFeedback: messageForFeedbackReducer,
        allData: allDataReducer
    }
})