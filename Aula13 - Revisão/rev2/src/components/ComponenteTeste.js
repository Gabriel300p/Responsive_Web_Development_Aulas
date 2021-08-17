import React, {useState} from 'react'

// eslint-disable-next-line
export default () => {

    const[aluno, setAluno] = useState('João')

  return(
    <>
      <p className="cTeste">Aluno: {aluno}</p>
      <button onClick={() => setAluno('Maria')}>Mudar</button>
    </>
  )
}
