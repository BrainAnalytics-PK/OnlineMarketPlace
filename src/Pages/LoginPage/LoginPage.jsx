import * as React from "react";
import { Box, Modal } from "@material-ui/core";
import { AiOutlineUser } from "react-icons/ai";
import { FaWindowClose, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./LoginPageStyles.css";

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Sign UP Page Toggle */}
      <div>
        <button className="Signup-Auth-Btn" onClick={handleOpen}>
          Sign Up
        </button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box>
            <div className="Sign-Up-Container">
              <button className="close" onClick={handleClose}>
                <FaWindowClose />
              </button>
              <h3>Sign Up</h3>
              <h2> Welcome To ************ Lets Get you On board in</h2>
              <input
                type="text"
                className="Sign-Up-Form"
                placeholder="First Name"
              />
              <input
                type="text"
                className="Sign-Up-Form"
                placeholder="User Name"
              />
              <input
                type="text"
                className="Sign-Up-Form"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="Sign-Up-Form"
                placeholder="Phone Number"
              />
              <input type="text" className="Sign-Up-Form" placeholder="Email" />
              <input
                type="date"
                className="Sign-Up-Form"
                placeholder="Date Of Birth"
              />
              <input
                type="text"
                className="Sign-Up-Form"
                placeholder="Password"
              />
              <input
                type="text"
                className="Sign-Up-Form"
                placeholder="Confirm Password"
              />
              <h3>Or</h3>
              <p>Sign Up Using</p>
              <button className="Signup-Auth-Btn-G">
                <FcGoogle />
              </button>
              <button className="Signup-Auth-Btn-F">
                <FaFacebook />
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default function LoginPage() {
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [password, SetPassword] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="Auth-Btn" onClick={handleOpen}>
       
        Sign In
        &nbsp;
        <AiOutlineUser />

      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box>
          <div className="Sign-In-Container">
            <button className="close" onClick={handleClose}>
              <FaWindowClose />
            </button>
            <h2 id="parent-modal-title">Sign In</h2>
            <p>Hi There !!! Please Sign In to Continue Shopping </p>
            <input
              type="text"
              placeholder="Enter User Name"
              className="Login-Auth"
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              className="Login-Auth"
              onChange={(e) => SetPassword(e.target.value)}
            />
            <br />
            <button
              className="Login-Auth-Btn"
              onClick={() => {
                if (userName === "") {
                  alert("User Name Cannot Be Empty");
                } else if (password === "") {
                  alert("Password Cannot Be Empty");
                } else {
                  alert(`Welcome ${userName} Happy Shopping`);
                  handleClose();
                }
              }}
            >
              Sign In
            </button>
            <ChildModal />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
