import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Grid } from "@material-ui/core";
import "./LoginPageStyles.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase-config";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const signup = () =>{
    if (email === "") {
      alert("Please Enter a Valid Email Address");
    }
    else if (password === "") {
      alert("Please Enter a Valid Password");
      
    }
    else{
      register(email, password);
    }
  }

  const login = () =>{
    if (email === "") {
      alert("Please Enter a Valid Email Address");
    }
    else if (password === "") {
      alert("Please Enter a Valid Password");
      
    }
    else{
      signin(email, password);
    }
  }

  const register = async (e, p) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, e, p);
      alert(`Welcome User: ${e}`);

    } catch (error) {
      console.log(error.message);
    }
  };
  const signin = async (e, p) => {
    try {
      const user = await signInWithEmailAndPassword(auth, e, p);
      alert(`Logged in as User: ${email}`);

    } catch (error) {
      console.log(error.message);
    }
  };
  const signout = async () => {
    await signOut(auth);
  };
  return (
    <>
      <Navbar />
      <Header />
      {/* Login Section */}
      <h1 id="Login-heading">Welcome to Aain!</h1>
      <div className="LoginPage-Container">
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={4}>
            <div className="Login-Section">
              <h2 className="Login-heading">Hi There</h2>
              <p className="Login-heading">Sign in to your account</p>
              <div className="input-container">
                <p>Enter Your Email*</p>
                <input
                  placeholder="Enter Email"
                  type="email"
                  className="Login-input"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Enter Password*</p>
                <input
                  placeholder="Enter Password"
                  className="Login-input
              "
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button onClick={login} className="Login-btn">Login</button>
                <br />
                <a id="forget" href="">
                  Forgot password?
                </a>
              </div>
            </div>
          </Grid>
          {/* Sign Up Section */}
          <Grid item xs={12} sm={12} md={4}>
            <div className="Signup-Section">
              <h3 className="Login-heading">Don't have an account?</h3>
              <p className="Login-heading">Let's get one!</p>
              <div className="input-container">
                <p>Enter Your Email*</p>
                <input
                  placeholder="Enter Email"
                  type="email"
                  className="Login-input"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Enter Password*</p>
                <input
                  placeholder="Enter Password"
                  className="Login-input
              "
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Enter First Name:</p>
                <input
                  placeholder="First Name"
                  className="Login-input
              "
                  type="password"
                  onChange={(e) => setfirstName(e.target.value)}
                />
                <p>Enter Last Name:</p>
                <input
                  placeholder="Last Name"
                  className="Login-input
              "
                  type="password"
                  onChange={(e) => setlastName(e.target.value)}
                />
                <br />
                <button onClick={signup} className="Login-btn">Signup</button>
              </div>
            </div>
          </Grid>
          {/* Social Media Login */}
          <Grid item xs={12} sm={12} md={4}>
            <div className="social-media">
              <h3 className="Login-heading">Or</h3>
              <p className="Login-heading"> Login using</p>
              <button className="social-media-login">
                FaceBook <FaFacebook />
              </button>
              <br />
              <button className="social-media-login">
                <FcGoogle /> Google
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
