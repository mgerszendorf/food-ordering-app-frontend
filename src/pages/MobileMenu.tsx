import { useSelector, useDispatch } from "react-redux";
import { Store } from "../store/types";
import { toggleMenu } from "../store/actions/navigationElementsAction";
import { Link } from "react-router-dom";
import userImg from "../assets/images/user.png";
import { FaSignOutAlt } from "react-icons/fa";

function MobileMenu() {
  const menuState = useSelector((state: Store) => state.menuState);
  const dispatch = useDispatch();

  return (
    <section className="mobile-menu">
      <div className="nav-bar">
        <div className="logo">Good Food</div>
        <div
          className="menu-button"
          onClick={() => dispatch(toggleMenu(false))}
        >
          {menuState ? (
            <input className="menu-button__cheeckbox" type="checkbox" checked />
          ) : (
            <input className="menu-button__cheeckbox" type="checkbox" />
          )}

          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link to="/my-cart">My cart</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <button>
              <FaSignOutAlt /> Sign out
            </button>
          </li>
        </ul>
      </nav>
      <div className="bottom-bar">
        <div className="user-data">
          <img src={userImg} alt="user avatar" />
          <p className="username">Marek Gerszendorf</p>
        </div>
        <div className="icon">
          <FaSignOutAlt />
        </div>
      </div>
    </section>
  );
}

export default MobileMenu;
