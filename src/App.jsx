import React from 'react'
import { Home } from './pages/Home'
import Dcnt from './pages/DCNT/Dcnt'
import { CommunicableDiseases } from './pages/CommunicableDiseases'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/communicable-diseases' element={<CommunicableDiseases />} />
      </Routes>
    </BrowserRouter>
  )
}