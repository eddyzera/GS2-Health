import React from 'react'
import { Home } from './pages/Home'
import Dcnt  from './pages/DCNT/Dcnt'
import Saude from './pages/Saude/Saude';
import Mortalidade from './pages/pag-infantil/Infantil';
import { CommunicableDiseases } from './pages/CommunicableDiseases'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactUs from './components/ContactUs';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/communicable-diseases' element={<CommunicableDiseases />} />
        <Route path='/Dcnt' element={<Dcnt />} />
        <Route path='/Saude' element={<Saude/>}/>
        <Route path='/Mortalidade' element={<Mortalidade/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}