import React from "react";
import { useSelector } from "react-redux";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Store } from "../store/types";
import Home from "./Home";
import MobileMenu from "./MobileMenu";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import ForgotPassword from "./Authentication/ForgotPassword";

function Root() {
  const menuState = useSelector((state: Store) => state.menuState);
  const signInState = useSelector((state: Store) => state.signInState);
  const signUpState = useSelector((state: Store) => state.signUpState);
  const forgotPasswordState = useSelector(
    (state: Store) => state.forgotPasswordState
  );

  return (
    <>
      {menuState ? (
        <MobileMenu />
      ) : (
        <>
          <NavigationBar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          {signInState && !signUpState && !forgotPasswordState && <SignIn />}
          {signUpState && !signInState && !forgotPasswordState && <SignUp />}
          {forgotPasswordState && !signInState && !signUpState && (
            <ForgotPassword />
          )}
        </>
      )}
    </>
  );
}

export default Root;
