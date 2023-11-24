import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import Menu from "../../components/Menu/Menu";
import './style.css'
import Modal from '../../components/Modal/Modal';

export const Home = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(state => !state)
  }

  const handleCloseModal = () => {
    setShowModal(state => !state)
  }
  return (
    <>
      <Menu/>
      <section className='banner'>
        <div className='card'>
          <h2>Esse elit voluptate amet.</h2>
          <p>Ipsum voluptate veniam eu consectetur proident consequat fugiat fugiat non laboris nisi ad magna est. Quis aliquip velit ea est officia.</p>
          <button className='card-button' onClick={() => handleOpenModal()}>começar</button>
        </div>
      </section>

      {showModal && createPortal(<Modal onClose={handleCloseModal} />, document.body)}
    </>
  )
}