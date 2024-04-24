import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserEmail } from "../features/login/userEmailSlice";
import { setUserPassword } from "../features/login/userPasswordSlice";
import swal from "sweetalert";
import { setIsUserLoggedIn } from "../features/login/isUserLoggedInSlice";
import { SHA256 } from "crypto-js";

const LoginModal = () => {
  const dispatch = useDispatch();
  const { userEmail } = useSelector((store) => store.userEmail);
  const { userPassword } = useSelector((store) => store.userPassword);

//   useEffect(() => {
//     console.log(`Useremail-${userEmail}, UserPasword-${userPassword}`);
//   }, [userEmail, userPassword]);

  const validateUser = () => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if email or password is empty
    if (userEmail.trim() === "" || userPassword.trim() === "") {
        swal("", "All fields are required", "warning");
      return false;
    }

    // Check if email is valid
    if (!emailRegex.test(userEmail)) {
        swal("", "Invalid Email", "warning");
      return false;
    }

    // Check if password is at least 6 characters long
    if (userPassword.trim().length < 6) {
        swal("", "Password should be atleast 6 characters long", "warning");
      return false;
    }

    return true;
  };

  const hashPassword = (password) => {
    return SHA256(password).toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUser()) {
        // console.log(`Useremail-${userEmail}, UserPasword-${userPassword}`);
      if (localStorage.getItem("database") && Object.keys(JSON.parse(localStorage.getItem("database"))).includes(userEmail)) {
        let database = JSON.parse(localStorage.getItem("database"));
        if (database[userEmail].password == hashPassword(userPassword)) {
          let close = document.getElementById("closebtnforlogin");
          close.click();
          swal("", "Successfully Logged in", "success");
          localStorage.setItem("user",JSON.stringify(database[userEmail]));
          dispatch(setIsUserLoggedIn(true))


          
        } else{
            swal("", "Incorrect password", "warning");
            dispatch(setIsUserLoggedIn(false));
        }
      } else{
        swal("", "User not found", "warning");
        dispatch(setIsUserLoggedIn(false));
      }
    }
  };

  return (
    <>
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
        className="block text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Login
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="static-modal"
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
                Login Form
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
                id="closebtnforlogin"
                onClick={()=>{
                    dispatch(setUserEmail(""));
                    dispatch(setUserPassword(""));
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
              <form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      dispatch(setUserEmail(e.target.value));
                    }}
                    value={userEmail}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    autoComplete="password"
                    onChange={(e) => {
                      e.preventDefault();
                      dispatch(setUserPassword(e.target.value));
                    }}
                    value={userPassword}
                  />
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
