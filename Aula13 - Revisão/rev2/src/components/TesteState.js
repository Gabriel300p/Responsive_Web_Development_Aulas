import React, { useState } from 'react'

// eslint-disable-next-line
export default () => {

  const [valorState, setValorState] = useState(5)
  let valorVariavel = 5
  function aumentar() {
    setValorState(valorState + 5)
    valorVariavel=+5
  }

  return(

    <>
      <p>ValorState: {valorState}</p>
      <p>ValorVariavel: {valorVariavel}</p>
      <button onClick={() => aumentar()}>Aumentar</button>
    </>
  )
}