import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profie"
import SignIn from "./pages/SignIn"
import SignOut from "./pages/Signout"
import Navbar from './components/Navbar'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-out' element={<SignOut/>} />  
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
