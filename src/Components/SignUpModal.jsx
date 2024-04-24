import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewUserEmail } from "../features/signup/newUserEmailSlice";
import { setNewUserPassword } from "../features/signup/newUserPasswordSlice";
import { setNewUserConfirmPassword } from "../features/signup/newUserConfirmPasswordSlice";
import { setNewUserFirstName } from "../features/signup/newUserFirstNameSlice";
import { setNewUserLastName } from "../features/signup/newUserLastNameSlice";
import { setNewUserPhoneNumber } from "../features/signup/newUserPhoneNumberSlice";
import { setNewUserCompanyName } from "../features/signup/newUserCompanyNameSlice";
import swal from "sweetalert";
import { SHA256 } from "crypto-js";

const SignUpModal = () => {
  const dispatch = useDispatch();
  const { newUserEmail } = useSelector((store) => store.newUserEmail);
  const { newUserPassword } = useSelector((store) => store.newUserPassword);
  const { newUserConfirmPassword } = useSelector(
    (store) => store.newUserConfirmPassword
  );
  const { newUserFirstName } = useSelector((store) => store.newUserFirstName);
  const { newUserLastName } = useSelector((store) => store.newUserLastName);
  const { newUserCompanyName } = useSelector(
    (store) => store.newUserCompanyName
  );
  const { newUserPhoneNumber } = useSelector(
    (store) => store.newUserPhoneNumber
  );

  const validateSignUp = (
    newUserEmail,
    newUserPassword,
    newUserConfirmPassword,
    newUserFirstName,
    newUserLastName,
    newUserCompanyName,
    newUserPhoneNumber
  ) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if any field is empty
    if (
      !newUserEmail ||
      !newUserPassword ||
      !newUserConfirmPassword ||
      !newUserFirstName ||
      !newUserLastName ||
      !newUserCompanyName ||
      !newUserPhoneNumber
    ) {
      swal("", "All fields are required", "warning");
      return { isValid: false, message: "All fields are required" };
    }

    // Check if email is valid
    if (!emailRegex.test(newUserEmail)) {
      swal("", "Invalid email format", "warning");
      return { isValid: false, message: "Invalid email format" };
    }

    // Check if password is at least 6 characters long
    if (newUserPassword.length < 6) {
      swal("", "Password should be at least 6 characters long", "warning");
      return {
        isValid: false,
        message: "Password should be at least 6 characters long",
      };
    }

    // Check if password and confirm password match
    if (newUserPassword !== newUserConfirmPassword) {
      swal("", "Passwords do not match", "warning");
      return { isValid: false, message: "Passwords do not match" };
    }

    // Check if phone number is valid (simple check for 10 digits)
    if (!/^\d{10}$/.test(newUserPhoneNumber)) {
      swal("", "Invalid phone number", "warning");
      return { isValid: false, message: "Invalid phone number" };
    }

    // If all validations pass, return true
    return { isValid: true, message: "Validation successful" };
  };

  const hashPassword = (password) => {
    return SHA256(password).toString();
  };

  const handleSignupForm = (e) => {
    e.preventDefault();
    const validation = validateSignUp(
      newUserEmail,
      newUserPassword,
      newUserConfirmPassword,
      newUserFirstName,
      newUserLastName,
      newUserCompanyName,
      newUserPhoneNumber
    );

    if (validation.isValid) {
      if (
        JSON.parse(localStorage.getItem("database")) &&
        Object.keys(JSON.parse(localStorage.getItem("database"))).includes(
          newUserEmail
        )
      ) {
        swal("", "User Already Present", "warning");
        return;
      } else {
        if (localStorage.getItem("database") === null) {
          localStorage.setItem("database", JSON.stringify({}));
        }
        let allUsers = JSON.parse(localStorage.getItem("database"));
        // console.log("allUsers", allUsers);
        allUsers[newUserEmail] = {
          email: newUserEmail,
          password: hashPassword(newUserPassword),
          name: `${newUserFirstName} ${newUserLastName}`,
          phone_number: newUserPhoneNumber,
          company: newUserCompanyName,
        };

        let updatedAllUsers = JSON.stringify(allUsers);
        localStorage.setItem("database", updatedAllUsers);
        document.getElementById("closebtnforsignupform").click();
        dispatch(setNewUserCompanyName(""));
        dispatch(setNewUserConfirmPassword(""));
        dispatch(setNewUserEmail(""));
        dispatch(setNewUserFirstName(""));
        dispatch(setNewUserLastName(""));
        dispatch(setNewUserPassword(""));
        dispatch(setNewUserPhoneNumber(""));

        swal("", "Congratulations, Successfully Registered!!", "success");
      }
    }
  };

  return (
    <>
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target="static-modal1"
        data-modal-toggle="static-modal1"
        className="block bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-lg px-5 py-2.5 text-center ml-3"
        type="button"
      >
        Sign Up
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="static-modal1"
        data-modal-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Signup Form
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal1"
                id="closebtnforsignupform"
                onClick={() => {
                  dispatch(setNewUserCompanyName(""));
                  dispatch(setNewUserConfirmPassword(""));
                  dispatch(setNewUserEmail(""));
                  dispatch(setNewUserFirstName(""));
                  dispatch(setNewUserLastName(""));
                  dispatch(setNewUserPassword(""));
                  dispatch(setNewUserPhoneNumber(""));
                }}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
              <form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      dispatch(setNewUserEmail(e.target.value));
                    }}
                    value={newUserEmail}
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    autoComplete="password"
                    onChange={(e) => {
                      dispatch(setNewUserPassword(e.target.value));
                    }}
                    value={newUserPassword}
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="repeat_password"
                    id="floating_repeat_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    autoComplete="confirm-pasword"
                    onChange={(e) => {
                      dispatch(setNewUserConfirmPassword(e.target.value));
                    }}
                    value={newUserConfirmPassword}
                  />
                  <label
                    htmlFor="floating_repeat_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Confirm password
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => {
                        dispatch(setNewUserFirstName(e.target.value));
                      }}
                      value={newUserFirstName}
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => {
                        dispatch(setNewUserLastName(e.target.value));
                      }}
                      value={newUserLastName}
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Last name
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="tel"
                      name="floating_phone"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => {
                        dispatch(setNewUserPhoneNumber(e.target.value));
                      }}
                      value={newUserPhoneNumber}
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone number (1234567890)
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_company"
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => {
                        dispatch(setNewUserCompanyName(e.target.value));
                      }}
                      value={newUserCompanyName}
                    />
                    <label
                      htmlFor="floating_company"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company (Ex. Google)
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleSignupForm}
                >
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
