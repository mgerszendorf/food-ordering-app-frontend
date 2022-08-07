import React, { useState } from "react";
import userImg from "../../assets/images/user.png";
import { MdOutlineKeyboardArrowUp, MdSettings } from "react-icons/md";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

function SidebarSlidingElement() {
  const [activeSlidingElement, setActiveSlidingElement] = useState(false);

  return (
    <div className="sidebar-sliding-element">
      <div
        className="user-container"
        onClick={() => setActiveSlidingElement(!activeSlidingElement)}
      >
        <div className="user-data">
          <img src={userImg} alt="user avatar" />
          <p className="username">Marek Gerszendorf</p>
        </div>
        <div className="arrow">
          <MdOutlineKeyboardArrowUp
            style={
              activeSlidingElement
                ? { transform: "rotate(-180deg)" }
                : undefined
            }
          />
        </div>
      </div>
      <div
        className="user-options"
        style={activeSlidingElement ? { height: "155px" } : undefined}
      >
        <div className="sign-in">
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
