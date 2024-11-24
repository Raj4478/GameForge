import { useState } from 'react'
import React from 'react';
import Home from './components/Home';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';



function App() {

 // const url = '/api/v1/users/login'
  //console.log(url);
  
  

  return (
    <>
<Header/>
   <Outlet/>
   <Footer/>
    </>
  )
}


export default App
