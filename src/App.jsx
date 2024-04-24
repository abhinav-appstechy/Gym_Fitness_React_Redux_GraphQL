import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import AboutUsPage from "./Components/AboutUsPage";
import PlanPage from "./Components/PlanPage";
import ContactUsPage from "./Components/ContactUsPage";
import LoginModal from "./Components/LoginModal";
import MyAccount from "./Components/MyAccount";
import { useDispatch, useSelector } from "react-redux";
import { setAllData } from "./features/alldata/allDataSlice";

function App() {

  const dispatch = useDispatch();
  const {isUserLoggedIn} = useSelector((store)=> store.isUserLoggedIn);
  const {allDataReducer} = useSelector((store)=> store.allData);

  // useEffect(() => {
  //   console.log("isUserLoggedIn",isUserLoggedIn)
  // }, [isUserLoggedIn])

  useEffect(() => {
    fetch("http://localhost:9000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({query:`{test
        header {
          brand_logo
          site_name
        }
        footer {
          brand_logo
          site_name
          at_symbol
        }
        homepage {
          hero_section_title
          hero_section_desc
          hero_section_first_btn
          hero_section_second_btn
          hero_section_image
          fitness_programs_section_title
          fitness_programs_section_desc
          fitness_programs_section_cards {
            program_id
            program_title
            program_desc
          }
          success_stories_section_title
          success_stories_section_desc
          success_stories_section_cards {
            card_id
            user_avatar_img
            user_review
            user_name
            user_role
          }
        }
        about_us {
          hero_section_image
          hero_section_title
          hero_section_desc
          our_team_members_card {
            member_avatar_image
            member_name
            member_role
          }
        }
        plan {
          hero_section_image
          hero_section_title
          hero_section_desc
          plan_first_btn
          plan_second_btn
          plan_cards {
            plan_name
            plan_price
            plan_highlights
            plan_button_value
          }
        }
        contact_us {
          feedback_form_title
          feedback_form_desc
          button_value
          site_map_view
        }
        my_account {
          custom_icons {
            name
            email
            contact_number
            company
            plan
            points
          }
          user_image_avatar
        }}`})
    })
    .then((res)=>{
      if(!res.ok){
        throw new Error("An error occured!!");
      }
      return res.json();
    })
    .then((data)=>{
      // console.log(data);
      dispatch(setAllData(data.data));
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  


  return (
    <>
      <BrowserRouter>
      
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutUsPage />}></Route>
          <Route path="/plan" element={<PlanPage />}></Route>
          <Route path="/contact-us" element={<ContactUsPage />}></Route>

          {JSON.parse(localStorage.getItem("user")) ? (
            <Route path="/my-account" element={<MyAccount />}></Route>
          ) : <Route path="/my-account" element={<Navigate to="/" />}></Route>}
          

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
