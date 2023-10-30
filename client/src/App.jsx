import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup';
import Login from './Login'
import Home from './Home'
import Navigation from "./navigation";
import About from './About';
import Contact from './Contact';
import GalleryReact from './GalleryReact';



function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path= '/home' element={<Home />}></Route>
      <Route path= '/navigation' element={<Navigation/>}></Route>
      <Route path= '/about' element={<About/>}></Route>
      <Route path= '/contact' element={<Contact/>}></Route> 
      <Route path= '/gallery' element={<GalleryReact/>}></Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
