import React from "react";
import { GrHomeRounded, GrMap, GrCart, GrHistory } from "react-icons/gr";
import { Link } from "react-router-dom";
import SidebarSlidingElement from "./SidebarSlidingElement";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-area">
        <h2 className="logo">Good Food</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <GrHomeRounded />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/restaurants">
                <GrMap />
                <span>Restaurants</span>
              </Link>
            </li>
            <li>
              <Link to="/my-cart">
                <GrCart />
                <span>My cart</span>
              </Link>
            </li>
            <li>
              <Link to="/history">
                <GrHistory />
                <span>History</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <SidebarSlidingElement />
    </div>
  );
}

export default Sidebar;
