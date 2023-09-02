import styled from 'styled-components'

export const Licenças = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem 0.5rem;
    border-radius: 15px;
    border: 1px solid #333;
    cursor: pointer;
    background-color: transparent;

    span {
      font-size: 0.875rem;
      line-height: 1.7;
      font-weight: 600;
      color: #595959;
    }
  }

  h2 {
    font-size: 1rem;
    line-height: 1.7;
    font-weight: 600;
    color: #474139;
  }

  strong,
  span {
    font-size: 0.875rem;
    line-height: 1.7;
    font-weight: 400;
  }

  #container {
    padding: 1rem 2rem;
  }

  #License-Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #title {
    font-size: 1.5rem;
  }

  #options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  #licenses {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #license-01 {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: flex-start;
    gap: 1rem;
    border-top: 1px solid #ccc;
    padding: 1rem;
  }

  #license-02 {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
  }

  #descriptions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`
