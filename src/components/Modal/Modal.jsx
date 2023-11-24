import React from 'react'
import './style.css'

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
            <div>
              <label>Nome</label>
              <input type="text" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Telefone</label>
              <input type="tel" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal