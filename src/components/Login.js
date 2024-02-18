
import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormDataSignUp,validateFormDataSIgnIN } from '../utils/ValidateData';
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [error, seterror] = useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const toggleSignInform = () => {
    setSignIn(!isSignIn);
  };

  const formvalidate = () => {
    if(!isSignIn){
    const message=validateFormDataSignUp(name.current.value, email.current.value, password.current.value);
    seterror(message);
    }
    if(isSignIn){
    const message=validateFormDataSIgnIN(email.current.value, password.current.value);
      seterror(message);
    }
  
 if(error) return;
 if(!isSignIn){
 createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
 .then((userCredential) => {
   // Signed up 
   const user = userCredential.user;
   updateProfile(auth.currentUser, {
    displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/93835021?v=4"
  }).then(() => {
    const {uid,email,displayName}=auth.currentUser;
    dispatch(  dispatch(addUser({uid:uid,email:email,displayName:displayName})));
    navigate('/browse')
  }).catch((error) => {
    navigate('/')
    seterror(error.message);
  });
   
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
 });
}else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    console.log()
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror("Invalid Credentials");
  });
}
}

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="absolute my-32 p-12 w-3/12 flex flex-col text-zinc-50 t-white mx-auto right-0 left-0 opacity-80 rounded-sm bg-black"
      >
        <h1 className="m-2 font-bold text-zinc-50 text-4xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 m-2 bg-gray-400 text-black placeholder-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 m-2 bg-gray-400 text-black placeholder-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-400 text-black placeholder-gray-700"
        />
        <p className="text-red-800 font-small text-2xl font-bold">{error ? error : null}</p>
        <button onClick={formvalidate} className="m-2 p-2 bg-red-700 rounded-sm">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="cursor-pointer" onClick={toggleSignInform}>{isSignIn ? "New to Netflix? Sign Up now" : "New to Netflix? Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;