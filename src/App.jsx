import React from 'react'
import { Home } from './pages/Home'
import Dcnt  from './pages/DCNT/Dcnt'
import Saude from './pages/Saude/Saude';
import { CommunicableDiseases } from './pages/CommunicableDiseases'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/communicable-diseases' element={<CommunicableDiseases />} />
        <Route path='/Dcnt' element={<Dcnt />} />
        <Route path='/Saude' element={<Saude/>}/>
        {/*
        <Route path='/MortalidadeInfantil' element{</>}/>
        */}
      </Routes>
    </BrowserRouter>
  )
}