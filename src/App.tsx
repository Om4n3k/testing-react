import React from 'react';
import {AnimatePresence} from "framer-motion";
import { Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header/>
      <div className='bg-dark'>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
          </Routes>
        </AnimatePresence>
      </div>
      <Footer/>
    </>
  );
}

export default App;
