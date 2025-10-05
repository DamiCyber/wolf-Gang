import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './component/Loader';
import LandingPage from './component/LandingPage';


const App = () => {
  return (
    <>
      <Routes>
      
        <Route path="/" element={<Loader />} />
        <Route path="/LandingPage" element={<LandingPage />} />

      </Routes>
    </>
  )
}

export default App