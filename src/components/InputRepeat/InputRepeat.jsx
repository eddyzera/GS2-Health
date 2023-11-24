import React, { useState } from 'react'
import './style.css'

function InputRepeat ({ inputFields, onInputChange }) {

  const [repeatState, setRepeatState] = useState({
    nameRemedy: "",
    quantity: "",
    time: ""
  })

  return (
    <div className='input-repeat'>
      <div>
        <label>Nome do Remédio</label>
        <input
          type="text"
          name="nameRemedy"
          value={inputFields.nameRemedy}
          onChange={(event) => onInputChange({
            ...inputFields,
            [event.target.name]: event.target.value
          })}
        />
      </div>
      <div>
        <label>Quantidade</label>
        <input
          type="text"
          name="quantity"
          value={inputFields.quantity}
          onChange={(event) => onInputChange({
            ...inputFields,
            [event.target.name]: event.target.value
          })}
        />
      </div>
      <div>
        <label>Horario</label>
        <input
          type="text"
          name="time"
          value={inputFields.time}
          onChange={(event) => onInputChange({
            ...inputFields,
            [event.target.name]: event.target.value
          })}
        />
      </div>
    </div>
  )
}

export default InputRepeat