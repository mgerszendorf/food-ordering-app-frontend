import React from "react";
import { useSelector } from "react-redux";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Store } from "../store/types";
import Home from "./Home";
import MobileMenu from "./MobileMenu";
import { Routes, Route } from "react-router-dom";

function Root() {
  const menuState = useSelector((state: Store) => state.menuState);

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
        </>
      )}
    </>
  );
}

export default Root;
