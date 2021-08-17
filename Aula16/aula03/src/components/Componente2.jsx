import React from 'react'

export default function Componente2(props) {

  const frutas = ['maça', 'banana', 'uva', 'goiaba', 'melancia']

  return(
    <>
      <h2>Componente 2</h2>
      <ul>
        {
          frutas.map((f, ind) => 
          <li>
            {`${f} é a fruta número ${ind}`}
          </li>)
        }
      </ul>
      {props.children}
    </>
  )
}