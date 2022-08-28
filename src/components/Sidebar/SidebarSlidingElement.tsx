import { useSelector, useDispatch } from "react-redux";
import userImg from "../../assets/images/user.png";
import { MdOutlineKeyboardArrowUp, MdSettings } from "react-icons/md";
import { FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { Store } from "../../store/types";
import { toggleSidebarSlidingElement } from "../../store/actions/navigationElementsAction";
import {
  showSignIn,
  showSignUp,
} from "../../store/actions/authenticationPopupsAction";
import { signout } from "../../store/actions/authAction";
import { connect } from "react-redux";

const SidebarSlidingElement = ({ signout }: any) => {
  const sidebarSlidingElementState = useSelector(
    (state: Store) => state.sidebarSlidingElementState
  );
  const authState = useSelector((state: Store) => state.authState);
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
          <p className="username">
            {authState?.user?.displayName
              ? authState?.user?.displayName
              : "Guest"}
          </p>
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
        style={sidebarSlidingElementState ? { height: "110px" } : undefined}
      >
        {authState?.user?.displayName ? (
          <>
            <div className="sign-out" onClick={() => signout()}>
              <FaSignOutAlt />
              <p>Sign Out</p>
            </div>
            <div className="settings">
              <MdSettings />
              <p>Settings</p>
            </div>
          </>
        ) : (
          <>
            <div className="sign-in" onClick={() => dispatch(showSignIn())}>
              <FaSignInAlt />
              <p>Sign In</p>
            </div>
            <div className="sign-up" onClick={() => dispatch(showSignUp())}>
              <FaUserPlus />
              <p>Sign Up</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    signout: () => dispatch(signout()),
  };
}

export default connect(null, mapDispatchToProps)(SidebarSlidingElement);
