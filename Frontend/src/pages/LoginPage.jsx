import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {
const [currstate, setcurrstate]= useState("Sign up");
const [fullname , setfullname ] = useState("");
const [email, setemail] = useState("");
const [password, setpassword ]=useState("");
const [bio, setbio]= useState("");
const [isdatasubmitted,setisdatasubmitted]= useState(false);

const onsubmithandler=(event)=>{  
  event.preventDefault ();
  if (currstate=="Sign up" && !isdatasubmitted){
    setisdatasubmitted(true);
    return
  }

}


  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 max-sm:flex-col backdrop-blur-2xl'>

{/* ----------left------------ */}
<img src={assets.logo_big} alt="" className='w-[min(30vw,250px)]'/>
{/* ----------------/-Right------------------- */}

<form onSubmit={onsubmithandler} action="" className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg' >
<h2 className='font-medium text-2xl flex justify-between items-center'>{currstate}
  {currstate}
  {
    isdatasubmitted &&   <img  onClick ={()=>{
      setisdatasubmitted(false)
    }}  src={assets.arrow_icon} alt="" className='w-5 cursor-pointer'/>
  }

 
</h2>
{
  currstate==="Sign up" && !isdatasubmitted &&<input   onChange={(e)=>(
setfullname(e.target.value)
  )} value={fullname}  type="text" className='p-2 border border-gray-500 rounded-md focus:outline-none' placeholder='Full Name'  required/>
}
{
  !isdatasubmitted && 
  <>
  <input type="email" 
  onChange={(e)=>(setemail(e.target.value)
  )} 
  value={email} placeholder='email Address' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 'required name="" id="" />
  
  <input type="password" 
  onChange={(e)=>(setpassword(e.target.value)
  )} 
  value={password} placeholder='password' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 'required name="" id="" />
  </>
}
{
  currstate==="Sign up" && isdatasubmitted &&
<textarea onChange={(e)=>setbio(e.target.value)} rows={4} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-indigo-500' placeholder='Provide a shord Bio' ></textarea>

}
<button type='submit'  className='py-3 bg-gradient-to-r from-purple-400 to-violet-600'>
  {
  currstate=="Sign up"?"CreatenAccout":"Login Now"
  }
</button>
<div className='flex items-center gap-2 text-sm text-gray-500 '>
  <input type="checkbox" />
  <p>Agree to the term of use & privacy policy</p>
</div>
<div  className='flex flex-col gap-2'>
  {currstate==="Sign up"? (
<p className='text-sm text-gray-600 '> Already have an account ? <span className='font-medium text-violet-500 cursor-pointer'  onClick={()=>{
  setcurrstate("Login");
  setisdatasubmitted(false);



}}>Login here </span></p>
  ):(
    <p className='text-sm text-gray-600'>
      Create an Account <span className='font-medium text-violet-500 cursor-pointer' onClick={()=>{
        setcurrstate("Sign up")
      }}>Click Here </span>
    </p>
  )} 

</div>
</form>

    </div>
  )
}

export default LoginPage
