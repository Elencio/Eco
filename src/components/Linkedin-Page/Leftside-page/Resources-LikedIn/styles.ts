import styled from 'styled-components'

export const Resources = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  strong {
    color: #474139;
  }

  #item {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }

  #header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid #ccc;
  }

  #option {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #title {
    font-size: 1.5rem;
    font-weight: 400;
  }

  #info {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  #info1 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    border-top: 1px solid #ccc;
    padding-top: 0.5rem;
  }

  #info-01 {
    display: flex;
    flex-direction: column;
  }

  #content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  #content:hover {
    background-color: #ccc;
  }

  #content span {
    font-weight: 600;
    color: #474139;
  }
`
