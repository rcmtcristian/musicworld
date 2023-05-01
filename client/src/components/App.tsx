import React from 'react'
// import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Nav from './Nav'
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
