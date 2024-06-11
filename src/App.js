import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import NotFound from './pages/404/NotFound'
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>  
    <Footer/>
    </>
  );
};

export default App