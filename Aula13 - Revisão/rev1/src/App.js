import React from 'react'
import fiap from './img/fiap.jpg'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

export default function App() {

  let nome = 'Gabriel'

  function mostrarNome() {

    return 'Debora'
  }

  return(
    <>
    <h1>Olá Mundo</h1>
    <br/>
    <p>Criei um parágrafo com o nome: {nome} e {mostrarNome()}</p>
    <img src="logo192.png"/>
    <img src={fiap} width='250px'/>
    <Comp1 nomeprof={nome}/>
    <Comp2 mostrar={mostrarNome}/>
    </>
  )
}
