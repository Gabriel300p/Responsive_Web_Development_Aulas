import React from 'react'

export default function ListaAluno(props) {

  return(
    <>
      <h2>{props.classe}</h2>
      <ul>
        <li>{props.alunos[0]}</li>
        <li>{props.alunos[1]}</li>
        <li>{props.alunos[2]}</li>
        <li>{props.alunos[3]}</li>
      </ul>
    </>
  )
}