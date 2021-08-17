import React from 'react'
import logo from './img/logo192.png'
import Lista from './Componentes/ListaAluno'

function App() {

  const aluno = "Gabriel Andrade"
  const curso = "ADS"
  const alunos = ['Ivo', 'Gabriel', 'João', 'Julio']
  const turma = '1TDSH'
  
  return(
    <>
    <h1>TDS FIAP - RWD</h1>
    <p>Alunos: {aluno}</p>
    <p>Alunos: {curso}</p>
    <img src={logo}/>
    <Lista alunos={alunos} classe={turma}/>  
    </>
  )
}

export default App;