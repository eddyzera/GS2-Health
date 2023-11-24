import React from 'react'
import './style.css'
import InputRepeat from '../InputRepeat/InputRepeat'

function Modal ({ onClose }) {
  return (
    <div className='modal-overlay'>
      <div className='modal-wrapper'>
        <div className='modal-header'>
          <h2>Cillum magna eiusmod ex aliquip.</h2>
          <button className='modal-close' onClick={() => onClose()}>
            x
          </button>
        </div>
        <div className='modal-body'>
          <form>
            <div className='input-wrapper'>
              <label>Nome</label>
              <input type="text" />
            </div>
            <div className='input-wrapper'>
              <label>Email</label>
              <input type="email" />
            </div>
            <div className='input-wrapper'>
              <label>Telefone</label>
              <input type="tel" />
            </div>
            <div className='input-repeat-wrapper'>
              <h2>Registre os seus remedios</h2>
              <InputRepeat />
              <InputRepeat />
              <InputRepeat />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal