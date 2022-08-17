import React from "react";
import { GrClose } from "react-icons/gr";

function SignUp() {
  return (
    <section className="sign-up-wrapper">
      <div className="sign-up">
        <div className="close-btn">
          <GrClose />
        </div>
        <h2>Create an account</h2>
        <p className="welcome-txt">
          Create an account and stay with us for longer.
        </p>
        <form action="">
          <label htmlFor="name">
            Name
            <input
              type="email"
              name="email"
              placeholder="Enter your name"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter your name")}
            />
          </label>
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
          <p className="sign-in-btn">Sign in</p>

          <button>Create account</button>
          <button>Sign up with Google</button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
