import React from 'react'
import Menu from "../../components/Menu/Menu";
import './style.css'

export const Home = () => {
  return (
    <>
      <Menu/>
      <section className='banner'>
        <div className='card'>
          <h2>Esse elit voluptate amet.</h2>
          <p>Ipsum voluptate veniam eu consectetur proident consequat fugiat fugiat non laboris nisi ad magna est. Quis aliquip velit ea est officia.</p>
          <button className='card-button'>começar</button>
        </div>
      </section>
    </>
  )
}