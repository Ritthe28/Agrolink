import React, { useState } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { useappcontaxt } from "../context/Appcontext.jsx";

const Login_Page = () => {
  const [signup, setSignup] = useState(false);
  const { navigate } = useappcontaxt();

  return (
    <div className="bg-[url('/farmer_bg.png')] bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center">
      <div className="backdrop-blur-lg bg-white/20 shadow-2xl rounded-2xl sm:w-[420px] w-[90%] p-6 flex flex-col gap-6 transition-all duration-500">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-amber-900">
          {signup ? "Create an Account" : "Welcome Back"}
        </h1>

        {/* Clerk Auth Components */}
        <div className="flex justify-center">
          {signup ? (
            <SignUp
              appearance={{
                elements: {
                  card: "shadow-none bg-transparent",
                },
              }}
              afterSignUp={() => navigate("/")}
            />
          ) : (
            <SignIn
              appearance={{
                elements: {
                  card: "shadow-none bg-transparent",
                },
              }}
              afterSignIn={() => navigate("/")}
            />
          )}
        </div>

        {/* Toggle Text */}
        <div className="text-xs text-center -mt-4">
          {signup ? (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-700 cursor-pointer font-medium"
                onClick={() => setSignup(false)}
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                className="text-blue-700 cursor-pointer font-medium"
                onClick={() => setSignup(true)}
              >
                Sign up
              </span>
            </>
          )}
        </div>

        {/* Continue without login */}
        <div className="w-full flex justify-center items-center mt-2">
          <span className="text-xs">
            Continue without login{" "}
            <span
              className="text-blue-800 cursor-pointer"
              onClick={() => navigate("/")}
            >
              click here
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login_Page;
