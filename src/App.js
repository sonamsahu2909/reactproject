import React from 'react'
import Home from './Component/Home'
import Header from './Component/layout/Header'
import Footer from './Component/layout/Footer'
import { Route, Routes } from 'react-router-dom'
import ShopAll from './Component/ShopAll'
import OurStory from './Component/OurStory'
import Contact from './Component/Contact'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shopall' element={<ShopAll/>} />
      <Route path='/ourstory' element={<OurStory/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App