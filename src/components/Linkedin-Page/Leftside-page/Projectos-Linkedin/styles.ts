import styled from 'styled-components'

export const Projetos = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;

  #container {
    padding: 1rem 2rem;
  }

  #Projeto-Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  #projeto-01 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-top: 1px solid #ccc;
    padding-top: 1rem;
    margin-bottom: 1rem;
  }

  #projeto-02 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 12px;
    border: 1px solid #000;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
`
