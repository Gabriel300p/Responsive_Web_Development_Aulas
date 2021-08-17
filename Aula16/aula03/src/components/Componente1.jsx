import React, { useState } from 'react'
import Componente2 from './Componente2'

export default function Componente1() {

  const [num, setNum] = useState(0)

  return(
    <>
      <h2>Componente 1</h2>
      <Componente2>
        <p>O número {num} é: {num % 2 === 0? 'par' : 'impar'}</p>
        {
          num % 2 === 0?
          <p>Este número é par</p> : 
          <h3>Este número é impar</h3> 
        }
      </Componente2>
      <button onClick={() => setNum(num + 1)}>Num + 1</button>
    </>
  )
}