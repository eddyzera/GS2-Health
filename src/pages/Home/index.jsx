import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
    <h1>Hello Home</h1>
    <Link to="/communicable-diseases">Combate a doenças transmissíveis</Link>
    <Link to="/Dcnt">Doenças Cronicas não transmissíveis</Link> 
    </>
  )
}