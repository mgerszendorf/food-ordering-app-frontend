import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userImg from "../../assets/images/user.png";
import { MdOutlineKeyboardArrowUp, MdSettings } from "react-icons/md";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Store } from "../../store/types";
import { toggleSidebarSlidingElement } from "../../store/actions/navigationElementsAction";
import {
  showSignIn,
  showForgotPassword,
} from "../../store/actions/authenticationPopupsAction";

function SidebarSlidingElement() {
  const sidebarSlidingElementState = useSelector(
    (state: Store) => state.sidebarSlidingElementState
  );
  const dispatch = useDispatch();

  return (
    <div className="sidebar-sliding-element">
      <div
        className="user-container"
        onClick={() =>
          dispatch(toggleSidebarSlidingElement(!sidebarSlidingElementState))
        }
      >
        <div className="user-data">
          <img src={userImg} alt="user avatar" />
          <p className="username">Guest</p>
        </div>
        <div className="arrow">
          <MdOutlineKeyboardArrowUp
            style={
              sidebarSlidingElementState
                ? { transform: "rotate(-180deg)" }
                : undefined
            }
          />
        </div>
      </div>
      <div
        className="user-options"
        style={sidebarSlidingElementState ? { height: "155px" } : undefined}
      >
        <div className="sign-in" onClick={() => dispatch(showSignIn())}>
          <FaSignInAlt />
          <p>Sign In</p>
        </div>
        <div className="sign-out">
          <FaSignOutAlt />
          <p>Sign Out</p>
        </div>
        <div className="settings">
          <MdSettings />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarSlidingElement;
