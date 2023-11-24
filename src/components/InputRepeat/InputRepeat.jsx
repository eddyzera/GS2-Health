import React, { useState } from 'react'
import './style.css'

function InputRepeat () {
  const [nameRemedy, setNameRemedy] = useState('')
  const [quantity, setQuantity] = useState('')
  const [time, setTime] = useState('')
console.table(nameRemedy, quantity, time)
  return (
    <div className='input-repeat'>
      <div>
        <label>Nome do Remédio</label>
        <input
          type="text"
          value={nameRemedy}
          onChange={(event) => setNameRemedy(event.target.value)}
        />
      </div>
      <div>
        <label>Quantidade</label>
        <input
          type="text"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>
      <div>
        <label>Horario</label>
        <input
          type="text"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
    </div>
  )
}

export default InputRepeat