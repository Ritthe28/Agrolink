import React from 'react'
import { appcontext } from './context/Appcontext'
import { useContext } from 'react'
import Login_Page from './Components/Login_Page.jsx';
import {Routes, Route} from "react-router-dom"
import Home_Page from './pages/Home_Page.jsx';
import Market from './pages/Market.jsx';
const App = () => {
  const {data } = useContext(appcontext);

  return (
    <div>
<Routes>
  <Route path='/' element={<Home_Page/>}></Route>
<Route path='/login' element={<Login_Page/>}></Route>
<Route path='/market' element={<Market/>}></Route>


</Routes>


    </div>
  )
}

export default App
