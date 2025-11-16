import React from 'react'
import { appcontext } from './context/Appcontext'
import { useContext } from 'react'
import Login_Page from './Components/Login_Page.jsx';
import {Routes, Route} from "react-router-dom"
import Home_Page from './pages/Home_Page.jsx';
import Market from './pages/Market.jsx';
import Navbar from './Components/Navbar.jsx';
import Crop_Converter from './pages/Crop_Converter.jsx';
import Dash_board from './pages/Owner_Element/Dash_board.jsx';
import List_sell from './pages/Owner_Element/List_sell.jsx';
import Layout from './pages/Owner_Element/Layout.jsx';
const App = () => {
  const {data } = useContext(appcontext);

  return (
    <div>
<Routes>
  <Route path='/' element={<Home_Page/>}></Route>
<Route path='/login' element={<Login_Page/>}></Route>
<Route path='/market' element={
  <><Navbar/><Market/></>
  }></Route>
  <Route element={<><Navbar/><Crop_Converter/></>} path="/crop_converter"></Route>

<Route path="/layout" element={<Layout />}>
  <Route index element={<Dash_board />} />
  <Route path="dashboard" element={<Dash_board />} />
  <Route path="list_sell" element={<List_sell />} />
</Route>

</Routes>


    </div>
  )
}

export default App
