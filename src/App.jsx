import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Nabvar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Donate from './components/Donate/Donate';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Users/Login';




function App() {
  

  return (
    <>
    <Donate></Donate>
    <Header></Header>
    <Nabvar></Nabvar>
    <Home></Home>
    <Footer></Footer>
    </>
    
    
  )
}

export default App
