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
          <h2>Ajuda com remédios.</h2>
          <p>Nós da Hapvida Notredame Intermédica te ajudamos a tomar medicações no horário certo.</p>
          <p>Com o nosso aplicativo disponivel para smartwatch as nossas notificações podem ser até 300% mais eficaz</p>
          <button className='card-button' onClick={() => handleOpenModal()}>começar</button>
        </div>
      </section>

      <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-6">
              <div id="faleConosco">
                <h1>Enviar uma solicitação</h1>
                <p>Não importa se é um probleminha técnico ou um surto, estamos aqui para ajudar! Envie um ticket! Responderemos em breve. </p>
              </div>  
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email para contato"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descreva da melhor maneira o seu problema"></textarea>
                
                </div>
              </div>
        </div>
            
        
        <div class="row justify-content-center">
          <div class="col-6">
              <div class="mb-3">
                <label for="formFile" class="form-label">Enviar Arquivo</label>
                <input class="form-control" type="file" id="formFile"/>
              </div>
              <button name="ResetForm" class="btn btn-primary" id="ResetForm" type="button">Enviar</button>
				


          </div>
        </div>
      </div>

      {showModal && createPortal(<Modal onClose={handleCloseModal} />, document.body)}
      
      
        

    </>
  )
}