import React, { useState } from 'react'

export default function NovosValores() {

  const [carro, setCarro] = useState({'marca':'','modelo':''})

  const mostrarCarro = (element) => {
    const {name, value} = element.target;
     
    if (name === 'marca'){
      setCarro({'marca': value, 'modelo': carro.modelo})
    }

    else if (name === 'modelo') {
      setCarro({'marca': carro, 'modelo': value})
    }
  }

  return(
    <>
        <h2>Dados do carro</h2>
        <label>Marca: </label>
        <input name="marca"  onChange={mostrarCarro}/><br/>
        <label >Modelo: </label>
        <input name="modelo" onChange={mostrarCarro}/><br/>

        <p>Meu carro é um {carro.marca} {carro.modelo}</p>
    </>
  )
}