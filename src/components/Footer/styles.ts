import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 5rem;
  align-items: flex-start;

  p {
    font-size: 0.75rem;
    font-weight: 400;
    color: #474139;
    line-height: 1.7;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: #474139;
    line-height: 1.7;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    li {
      text-decoration: none;
      list-style: none;
      font-size: 0.75rem;
      font-weight: 700;
      color: #474139;
      line-height: 1.7;
    }
  }

  input[type='text'] {
    width: 250px;
    padding: 5px;
    border-radius: 6px;
    border: 1px solid #000;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.5fr 1fr;
  gap: 0.5rem;
`
