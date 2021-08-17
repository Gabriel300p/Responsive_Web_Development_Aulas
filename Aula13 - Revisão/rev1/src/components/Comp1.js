import React from 'react'

export default function Comp1(props) {

  return(
    <>
      <h2>COMP1</h2>
      <p>Esse é um componente</p>
      <p>Nome que veio de APP: {props.nomeprof}</p>
    </>
  )
}