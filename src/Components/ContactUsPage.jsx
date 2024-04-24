import React from "react";
// import { allData } from "../../allData";
import { useDispatch, useSelector } from "react-redux";
import { setEmailForFeedback } from "../features/feedback/emailForFeedbackSlice";
import { setMessageForFeedback } from "../features/feedback/messageForFeedbackSlice";
import swal from "sweetalert";

const ContactUsPage = () => {
  const dispatch = useDispatch();
  const { emailForFeedback } = useSelector((store) => store.emailForFeedback);
  const { messageForFeedback } = useSelector(
    (store) => store.messageForFeedback
  );
  const { allData } = useSelector((store) => store.allData);

  const validateUser = () => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if email or password is empty
    if (emailForFeedback.trim() === "" || messageForFeedback.trim() === "") {
      swal("", "All fields are required!", "warning");
      return false;
    }

    // Check if email is valid
    if (!emailRegex.test(emailForFeedback)) {
      swal("", "Invalid email", "warning");
      return false;
    }


    return true;
  };


  const handleSubmitFeedback = (e) =>{
    e.preventDefault();
    if(validateUser()){
        swal("", "Your Feedback is submitted successfully!", "success")
        dispatch(setEmailForFeedback(""));
        dispatch(setMessageForFeedback(""));
    }
  }

  

  return (
    <>
    {allData!==null ? (
      <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src={allData.contact_us.site_map_view}
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            {allData.contact_us.feedback_form_title}
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            {allData.contact_us.feedback_form_desc}
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                dispatch(setEmailForFeedback(e.target.value));
              }}
              value={emailForFeedback}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              onChange={(e) => {
                dispatch(setMessageForFeedback(e.target.value));
              }}
              value={messageForFeedback}
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmitFeedback}>
            {allData.contact_us.button_value}
          </button>
        </div>
      </div>
    </section>
    ) : <></>}
    
    </>
  );
};

export default ContactUsPage;
