import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(false);
 const toggleSignInform=()=>{
  setSignIn(!isSignIn)
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
        action=""
        className="absolute my-32 p-12 w-3/12 flex flex-col text-zinc-50 t-white mx-auto right-0 left-0 opacity-80 rounded-sm bg-black"
      >
        <h1 className="m-2 font-bold text-zinc-50 text-4xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 bg-gray-400 text-black placeholder-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 m-2 bg-gray-400 text-black placeholder-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-400 text-black placeholder-gray-700"
        />
        <button className="m-2 p-2 bg-red-700 rounded-sm">{isSignIn?"Sign In":"Sign Up"}</button>
        <p  className="cursor-pointer" onClick={toggleSignInform}>{isSignIn?"New to Netflix? Sign Up now":"New to Netflix? Sign In now"} </p>
      </form>
    </div>
  );
};

export default Login;
