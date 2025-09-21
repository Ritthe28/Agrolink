import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from './pages/ProfilePage.jsx';
import {ToastContainer} from "react-toastify"
import { toast } from 'react-toastify';


const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-cover ">
  
      <Routes>

        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
      </Routes>
<ToastContainer/>
    </div>
  )
}

export default App
