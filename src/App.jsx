import { useEffect, useState } from 'react'
import Baneer_1 from './components/Banner-1/Banner_1';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import VideoSlider from './components/VideoSlider/VideoSlider';

function App() {

  return (
    <>
      <div className='vsco-container' style={{overflowX: "hidden"}}>
        <LandingPage />
        <Baneer_1/>
        <VideoSlider/>
      </div>
    </>
  )
}

export default App
