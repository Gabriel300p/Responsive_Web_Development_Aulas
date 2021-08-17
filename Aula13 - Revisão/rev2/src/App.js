import React from 'react'
import './App.css'
import CompTeste from './components/ComponenteTeste'
import TesteState from './components/TesteState'

// eslint-disable-next-line
export default () => {

  const paragrafo = {
    textAlign: 'justify',
    color: 'darkgreen',
    textIdent: '50px',
    fontSize: '2rem',
  }
  
  return(
    <>
      <h1 style={{fontSize: '4em', color: 'red'}}>Agora o conteúdo vem do App</h1>
      <p style={paragrafo}>Formas de inserir CSS em um componente</p>
      <p className="exemplo">Aqui um exemplo do "className"</p>
      <CompTeste/>
      <TesteState/>
    </>
  )
}