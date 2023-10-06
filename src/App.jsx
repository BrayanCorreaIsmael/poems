import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Nabvar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';



function App() {
  

  return (
    <>
      <Header></Header>
      <Nabvar></Nabvar>
      <Home></Home>
      <Footer></Footer>
    
    </>
  )
}

export default App
