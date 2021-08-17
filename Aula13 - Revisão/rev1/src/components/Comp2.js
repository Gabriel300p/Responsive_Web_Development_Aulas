import React from 'react'
import FiapSchool from '../img/fiap.jpg'

export default function Comp2(props) {

  return (
    <>
      <h2>COMP2</h2>
      <p>Este é o conteúdo de Comp2</p>
      <p>Este veio da função em APP: {props.mostrar()}</p>
      <img src={FiapSchool}/>
    </>
  )
}