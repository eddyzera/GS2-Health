import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import './style.css'
import InputRepeat from '../InputRepeat/InputRepeat'

function Modal ({ onClose }) {

  const [dynamicFields, setDynamicFields] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const handleAddMore = () => {
    setDynamicFields(value => [...value, {
      id: uuidV4(),
      nameRemedy: "",
      quantity: "",
      time: "",
     }])
  }

  const handleDynamicFields = (obj) => {
    setDynamicFields(value => value.map((item) => item.id === obj.id ? obj : item))
  }

  const handleSubmit = () => {
    console.log(`go to API =>`, {
      name,
      email,
      tel,
      dynamicFields
    })
  }

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
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='input-wrapper'>
              <label>Email</label>
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className='input-wrapper'>
              <label>Telefone</label>
              <input type="tel" value={tel} onChange={(event) => setTel(event.target.value)} />
            </div>
            <div className='input-repeat-wrapper'>
              <h2>Registre os seus remedios</h2>
              {dynamicFields.map((item) => 
                (<InputRepeat key={item.id} inputFields={item} onInputChange={handleDynamicFields} />))
              }
            </div>
            <div className='action-wrapper'>
              <button
                className='add-more'
                type='button' 
                onClick={(event) => {
                  event.preventDefault()
                  handleAddMore()
                }}
              >
                Adicionar Campo
              </button>

              <button
                className='add-more'
                type='button' 
                onClick={(event) => {
                  handleSubmit()
                }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal