import styled from 'styled-components'

export const Sobre = styled.section`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem 2rem;

  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.7;
    color: #595959;
  }

  #SobreHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #title {
    font-size: 1.5rem;
    font-weight: 400;
  }

  #content {
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  #options {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #options span {
    font-size: 0.9rem;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:after {
      display: flex;
      content: '';
      padding: 0.25rem;
      margin: 0.7rem;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      background-color: #000;
    }
  }
`
