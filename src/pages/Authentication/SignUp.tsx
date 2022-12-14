import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import {
  hideForgotPassword,
  hideSignUp,
  showSignIn,
} from "../../store/actions/authenticationPopupsAction";
import { signup, signInWithGoogle } from "../../store/actions/authAction";
import { connect } from "react-redux";

const SignUp = ({ signup, signInWithGoogle }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleSignIn() {
    dispatch(showSignIn());
    dispatch(hideForgotPassword());
    dispatch(hideSignUp());
  }

  function signUpUserOnSubmit(e: any) {
    e.preventDefault();
    signup(email, password, name);
  }

  return (
    <section className="sign-up-wrapper">
      <div className="sign-up">
        <div className="close-btn" onClick={() => dispatch(hideSignUp())}>
          <GrClose />
        </div>
        <h2>Create an account</h2>
        <p className="welcome-txt">
          Create an account and stay with us for longer.
        </p>
        <form onSubmit={signUpUserOnSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="text"
              placeholder="Enter your name"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter your name")}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="sign-in-btn" onClick={() => handleSignIn()}>
            Sign in
          </p>

          <button>Create account</button>
        </form>
        <button className="google-btn" onClick={() => signInWithGoogle()}>
          Sign up with Google
        </button>
      </div>
    </section>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    signup: (email: string, password: string, name: string) =>
      dispatch(signup(email, password, name)),
    signInWithGoogle: () => dispatch(signInWithGoogle()),
  };
}

export default connect(null, mapDispatchToProps)(SignUp);
