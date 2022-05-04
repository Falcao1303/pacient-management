import React from 'react'
import styled from "styled-components";

const Naoencontrado = styled.p`
    font-size: var(--fonte-tamanho-naoencontrado-texto);
    margin-bottom: 1rem;
 ` 


const Pagina404 = () => { 
  return (
    <main className="container flex flex--centro flex--coluna" >
      <Naoencontrado>
        Ops, Essa página não existe!
      </Naoencontrado>
    </main>
  )
}

export default Pagina404