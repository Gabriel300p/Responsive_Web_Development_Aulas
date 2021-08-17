import React from 'react'
import Evolque from '../img/evolque.jpg'

export default function Carros(props) {

  return(
    <div>
      <img src={Evolque} alt="Evolque"/>
      <ul>
        <li>{props.carros[0]}</li>
        <li>{props.carros[1]}</li>
        <li>{props.carros[2]}</li>
        <li>{props.carros[3]}</li>
        <li>{props.carros[4]}</li>
      </ul>
    </div>
  )
}