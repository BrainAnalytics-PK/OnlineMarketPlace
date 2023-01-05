import * as React from "react";
import { Modal } from "@material-ui/core";
import { AiFillCloseCircle, AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { UseAuth } from "../UseAuth";
import "./LoginStyles.css";

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { setUserEmail, setUserPassword, checkSignIn } = UseAuth();

  return (
    <>
      <button onClick={handleOpen} className="signin-btn">
        Sign in <br /> <AiOutlineUser />
      </button>
      <Modal open={open}>
        <div className="sign-in-container">
          <AiFillCloseCircle onClick={handleClose} className="Close-Icon" />
          <h2 className="auth-heading" style={{ fontWeight: "200" }}>
            Welcome Back!!
          </h2>
          <h1 className="auth-heading">Sign in to your Account</h1>
          <div className="auth-cred-container">
            <p className="input-text">Enter Email*</p>
            <div className="input">
              <input
                className="auth-cred-input"
                type="email"
                required
                placeholder="Enter Your Email"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <p className="input-text">Enter Password</p>
            <div className="input">
              <input
                className="auth-cred-input"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <button className="auth-signin-btn" onClick={checkSignIn}>
              login
            </button>

            <a href="#">Forgot Password?</a>
          </div>
          <div className="social-media-auth">
            <h2 className="auth-heading">Or</h2>
            <h3 className="auth-heading">Login using</h3>
            <button className="social-media-auth-btn">
              <FcGoogle />
            </button>
            <button className="social-media-auth-btn">
              <BsFacebook className="fb"/>
            </button>
            <button className="signup-btn">Don't have an account? Signup</button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Login;