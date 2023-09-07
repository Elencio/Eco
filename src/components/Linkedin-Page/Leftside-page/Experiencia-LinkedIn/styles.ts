import styled from 'styled-components'

export const Experiencia = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem 2rem;

  #title-header {
    font-size: 1.5rem;
    font-weight: 400;
  }

  #Experience-Header {
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

  #experience-01 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  #experience-02 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    border-top: 1px solid #ccc;
    padding-top: 1rem;
  }

  #experiences {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #descriptions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  #descriptions h2 {
    font-size: 1.1rem;
    color: #474139;
    font-weight: bold;
    line-height: 1.7;
  }

  #descriptions span {
    font-size: 0.8rem;
    color: #595959;
    font-weight: 500;
    line-height: 1.7;
  }

  #descriptions strong {
    font-size: 0.8rem;
    color: #191919;
    font-weight: 500;
    line-height: 1.7;
  }

  #descriptions p {
    font-size: 0.8rem;
    color: #191919;
    font-weight: 400;
    line-height: 1.7;
  }

  #title {
    font-size: 0.8rem;
    color: #474139;
    font-weight: bold;
    line-height: 1.7;
  }
`
