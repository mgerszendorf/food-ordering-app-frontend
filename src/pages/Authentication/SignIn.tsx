import React from "react";
import { GrClose } from "react-icons/gr";

function SignIn() {
  return (
    <section className="sign-in-wrapper">
      <div className="sign-in">
        <div className="close-btn">
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
            <p>Forgot password</p>
            <p>Sign up</p>
          </div>

          <button>Sign in</button>
          <button>Sign in with Google</button>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
