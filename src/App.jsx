import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Homepage from './pages/HomePage/Homepage'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
      <div className='vsco-main-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/user/login' element={<Login />} />
            <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
