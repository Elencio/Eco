import styled from 'styled-components'

export const Formação = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem 2rem;

  h2 {
    font-size: 1rem;
    color: #474139;
  }

  strong {
    font-size: 0.8rem;
    font-weight: 400;
  }

  #Degree-Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #degrees {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #title {
    font-size: 1.5rem;
    font-weight: 400;
  }

  #degrees span {
    font-size: 1rem;
  }

  #degree-01 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
    border-top: 1px solid #ccc;
    padding-top: 1rem;
  }

  #degree-02 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
  }

  #degree-02 img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  #degree-01 img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  #descriptions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  #options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
`
