import React, { useContext, useState } from 'react';
import { useappcontaxt } from '../context/Appcontext.jsx';

const Login_Page = () => {
  const [signup, setSignup] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");


  const{data, isloggedin , setisloggedin ,navigate }= useappcontaxt();

  return (
    <div className="bg-[url('/farmer_bg.png')] bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center">
      <div className="backdrop-blur-lg bg-white/20 shadow-2xl rounded-2xl sm:w-[420px] w-[90%] p-6 flex flex-col gap-4 transition-all duration-500">
        
        {/* Title */}
      
        <h1 className="text-2xl font-bold text-center text-amber-900">
          {signup ? "Create an Account" : "Welcome Back"}
          {data}
        </h1>
        <p className="text-center text-sm text-gray-700 mb-2">
          {signup ? "Join us today!" : "Login to continue"}
          {data}
        </p>

        {/* Login Form */}
        {!signup ? (
          <form className="flex flex-col gap-4" onSubmit={(e)=>{
            e.preventDefault();
            navigate("/");
            setisloggedin(true);

            }}> 
            <input 
              type="email" 
              className="w-full h-11 px-3 rounded-xl bg-white/40 text-gray-800 text-base border focus:outline-none focus:ring-2 focus:ring-orange-400"  
              placeholder="Enter Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <input 
              type="password"
              className="w-full h-11 px-3 rounded-xl bg-white/40 text-gray-800 text-base border focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input 
              type="text"
              className="w-full h-11 px-3 rounded-xl bg-white/40 text-gray-800 text-base border focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button 
              className="w-full h-11 bg-gradient-to-r from-red-700 to-orange-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-all"
              type="submit"
              onClick={()=>{setisloggedin(true)
                navigate("/")
              }}
            >
              Login
            </button>
            <span className="text-xs text-center">
              Don’t have an account? 
              <span 
                className="text-blue-700 cursor-pointer font-medium ml-1 hover:underline"
                onClick={() => setSignup(true)}
              >
                Sign up
              </span>
            </span>
              <div className='w-full flex justify-center items-center'>
              <span className='text-xs '>Continue without login  <span className='text-xs text-center text-blue-800 cursor-pointer' onClick={()=>{
                navigate("/")
              }}> click here </span>  </span>
            </div>
          </form>
        ) : (
          // Signup Form
          <form className="flex flex-col gap-4" onSubmit={(e)=>{
            e.preventDefault();
               navigate("/");

          }}>
            <input 
              type="text" 
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-white/40 text-gray-800 text-base border focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input 
              type="email" 
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-white/40 text-gray-800 text-base border focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input 
              type="tel" 
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-white/40 text-gray-800 text-base border focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-white/40 text-gray-800 text-base border focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select Type of Customer</option>
              <option value="Farmer">Farmer</option>
              <option value="Customer">Customer</option>
              <option value="Transporter">Transporter</option>
            </select>
            <input 
              type="password" 
              placeholder="Set Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-white/40 text-gray-800 text-base border focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button 
              className="w-full h-11 bg-gradient-to-r from-red-700 to-orange-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-all"
              type="submit"
            >
              Sign Up
            </button>
            <span className="text-xs text-center">
              Already have an account? 
              <span 
                className="text-blue-700 cursor-pointer font-medium ml-1 hover:underline"
                onClick={() => setSignup(false)}
              >
                Login
              </span>
            </span>
            <div className='w-full flex justify-center items-center'>
              <span className='text-xs '>Continue without login  <span className='text-xs text-center text-blue-800 cursor-pointer' onClick={()=>{
                navigate("/")
              }}> click here </span>  </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login_Page;
