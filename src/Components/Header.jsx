import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNavLink } from "../features/header/activeNavLinkSlice";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { setIsUserLoggedIn } from "../features/login/isUserLoggedInSlice";
// import { allData } from "../../allData";

const Header = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;

  const dispatch = useDispatch();
  const { activeNavLink } = useSelector((store) => store.activeNavLink);
  const { isUserLoggedIn } = useSelector((store) => store.isUserLoggedIn);
  const { allData } = useSelector((store) => store.allData);



  useEffect(() => {
    // console.log("pathname", pathname);
    let routeHashMap = {
      "/": "Home",
      "/about-us": "About Us",
      "/plan": "Plan",
      "/contact-us": "Contact Us",
      "/my-account": "My Account",
    };

    dispatch(setActiveNavLink(routeHashMap[pathname]));
  }, [pathname]);


  useEffect(() => {
    if(JSON.parse(localStorage.getItem("user"))){
        dispatch(setIsUserLoggedIn(true))
    } else{
        dispatch(setIsUserLoggedIn(false));
    }
  }, [])
  



  return (
    <>
    {allData!=null ? (
      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={allData.header.brand_logo} width="50px" height="50px" alt="" />
          <span className="ml-3 text-xl">{allData.header.site_name}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            className={`mr-5 hover:text-gray-900 hover:cursor-pointer ${
              activeNavLink == "Home" ? "bg-indigo-600 text-white" : ""
            } p-2 rounded-md`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`mr-5 hover:text-gray-900 hover:cursor-pointer ${
              activeNavLink == "About Us" ? "bg-indigo-600 text-white" : ""
            } p-2 rounded-md`}
          >
            About Us
          </Link>
          <Link
            to="/plan"
            className={`mr-5 hover:text-gray-900 hover:cursor-pointer ${
              activeNavLink == "Plan" ? "bg-indigo-600 text-white" : ""
            } p-2 rounded-md`}
          >
            Plan
          </Link>
          <Link
            to="/contact-us"
            className={`mr-5 hover:text-gray-900 hover:cursor-pointer ${
              activeNavLink == "Contact Us" ? "bg-indigo-600 text-white" : ""
            } p-2 rounded-md`}
          >
            Contact Us
          </Link>
        </nav>

        {isUserLoggedIn ? (
          <>
            <Link to="/my-account" className={`inline-flex items-center border-0 ${activeNavLink == "My Account" ? "bg-indigo-600 text-white" : "" } text-base mt-4 md:mt-0 ml-3 p-2 rounded-md`} >
              My Account
            </Link>

            <button className="inline-flex items-center bg-gray-100 border-0  focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ml-3 p-2 rounded-md" onClick={()=>{localStorage.removeItem("user");dispatch(setIsUserLoggedIn(false)); window.location.href = "/"}}>
              Signout
            </button>
          </>
        ) : (
          <>
            <LoginModal />
            <SignUpModal />
          </>
        )}
      </div>
    </header>
    ) : <></>}
    
    </>
  );
};

export default Header;
