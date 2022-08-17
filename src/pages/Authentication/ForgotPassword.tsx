import React from "react";
import { GrClose } from "react-icons/gr";
import { BiLeftArrowAlt } from "react-icons/bi";

function ForgotPassword() {
  return (
    <section className="forgot-password-wrapper">
      <div className="forgot-password">
        <div className="close-btn">
          <GrClose />
        </div>
        <h2>Forgot password?</h2>
        <p className="welcome-txt">
          No worries, we'll send you reset instructions.
        </p>
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
          <button>Reset password</button>
        </form>
        <div className="back">
          <BiLeftArrowAlt />
          <p>Back to sign in</p>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
