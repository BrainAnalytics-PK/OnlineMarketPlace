import { useState } from "react";
import { auth } from "../../Firebase/firebase-config";


export const UseAuth = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const checkSignIn = () => {
if (userEmail === "") {
    alert("Please Enter Your Email");
}
else if (userPassword === "") {
    alert("Please Enter Your Password");
}
else{
    signin(userEmail,userPassword)
}
  };

  return { checkSignIn, setUserEmail, setUserPassword };
};
const signin = (userEmail,userPassword) => {
  console.log(userEmail, userPassword);
};
const signup = () => {};
