import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import {
  hideForgotPassword,
  hideSignIn,
  hideSignUp,
  showForgotPassword,
  showSignUp,
} from "../../store/actions/authenticationPopupsAction";

function SignIn() {
  const dispatch = useDispatch();

  function handleForgotPassword() {
    dispatch(showForgotPassword());
    dispatch(hideSignIn());
    dispatch(hideSignUp());
  }

  function handleSignUp() {
    dispatch(showSignUp());
    dispatch(hideSignIn());
    dispatch(hideForgotPassword());
  }

  return (
    <section className="sign-in-wrapper">
      <div className="sign-in">
        <div className="close-btn" onClick={() => dispatch(hideSignIn())}>
          <GrClose />
        </div>
        <h2>Welcome back</h2>
        <p className="welcome-txt">Welcome back! Please enter your details.</p>
        <form action="">
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter your email")}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter your password")}
            />
          </label>
          <div className="row">
            <p onClick={() => handleForgotPassword()}>Forgot password</p>
            <p onClick={() => handleSignUp()}>Sign up</p>
          </div>

          <button>Sign in</button>
          <button>Sign in with Google</button>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
