import React from 'react'
import Cabecalho from './Componentes/Cabecalho'
import Carros from './Componentes/Carros'
import Parceiros from './Componentes/Parceiros'

const carros = ['Ford', 'Honda', 'Chevrolet', 'Range Rover', 'Kia']
const soma = (n1,n2) => n1 + n2

function App() {

  return(
    <div>
      <Cabecalho/>
      <Carros carros={carros}/>
      <Parceiros soma={soma}/>
    </div>
  )
}

export default App;